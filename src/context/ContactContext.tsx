import { ReactNode, createContext, useState } from "react";
import { ContactContextProps, ContactFormData } from "../interface";
import axios from "axios";

export const ContactContext = createContext<ContactContextProps | undefined>(
  undefined
);

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<any | null>(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleFormSubmition = async (formData: ContactFormData) => {
    try {
      setLoading(true);
      await axios.post(`${API_BASE_URL}/contact`, formData);
      setServerError(null);
    } catch (error) {
      console.log(error);
      setServerError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        handleFormSubmition,
        loading,
        serverError,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
