import { useContext } from "react";
import { FetcherContext } from "../context/FetcherContext";

export const useFetcher = () => {
  const context = useContext(FetcherContext);
  if (!context) {
    throw new Error("useFetcher must be used within a FetcherProvider");
  }
  return context;
};
