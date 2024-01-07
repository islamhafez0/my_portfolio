import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import { IntersectionTypes } from "../../interface";

export const IntersectionContext = createContext<IntersectionTypes | undefined>(
  undefined
);

export const IntersectionProvider = ({ children }: { children: ReactNode }) => {
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const observe = (target: Element) => {
    if (observerRef.current) {
      observerRef.current.observe(target);
    }
  };

  const unobserve = (target: Element) => {
    if (observerRef.current) {
      observerRef.current.unobserve(target);
    }
  };

  const contextValue = {
    inView,
    observe,
    unobserve,
  };

  return (
    <IntersectionContext.Provider value={contextValue}>
      {children}
    </IntersectionContext.Provider>
  );
};
