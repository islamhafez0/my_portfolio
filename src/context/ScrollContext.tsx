import { useRef, useContext, createContext, ReactNode } from "react";

interface ScrollContextType {
  scrollRefs: React.MutableRefObject<Record<string, HTMLElement | undefined>>;
  scrollTo: (sectionId: string) => void;
}
const defaultContextValue: ScrollContextType = {
  scrollRefs: { current: {} },
  scrollTo: () => {},
};
const ScrollContext = createContext<ScrollContextType>(defaultContextValue);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const scrollRefs = useRef<any>({});
  const scrollTo = (sectionId: string) => {
    const section = scrollRefs.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ScrollContext.Provider value={{ scrollTo, scrollRefs }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
