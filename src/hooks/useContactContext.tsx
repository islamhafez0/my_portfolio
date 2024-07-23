import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

export const useContactContext = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useFetcher must be used within a FetcherProvider");
  }
  return context;
};
