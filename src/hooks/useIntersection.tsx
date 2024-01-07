import { useContext } from "react";
import { IntersectionContext } from "../context/IntersectionObserverContext";
import { IntersectionTypes } from "../interface";

export const useIntersection = (): IntersectionTypes => {
  const context = useContext(IntersectionContext);
  if (!context) {
    throw new Error(
      "useIntersection must be used within an IntersectionProvider"
    );
  }
  return context;
};
