import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div
      style={{ width: `${scrollProgress}%` }}
      className="fixed top-0 left-0 w-0 h-1 z-50 transition-all linearBg"
    ></div>
  );
};

export default ScrollProgress;
