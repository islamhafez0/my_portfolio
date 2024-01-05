import { ReactNode, createContext, useState } from "react";
import { ContactFormData, FetcherContextProps } from "../../interface";
import axios from "axios";

export const FetcherContext = createContext<FetcherContextProps | undefined>(
  undefined
);

export const FetcherProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<any | null>(null);

  const API_BASE_URL = "https://portfolio-api-peach.vercel.app/api";

  const handleFormSubmition = async (formData: ContactFormData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/contact`, formData);
      setServerError(null);
      console.log(response);
    } catch (error) {
      console.log(error);
      setServerError(error);
    } finally {
      setLoading(false);
    }
  };

  /*
    // const [projects, setProjects] = useState<ProjectTypes[]>([]);
    // const [fetchError, setFetchError] = useState<null | any>(null);
    // const [dataLoading, setDataLoading] = useState<boolean>(false);
    // const [project, setProject] = useState(null);
    const fetchProjects = async () => {
    try {
      setDataLoading(true);
      const { data } = await axios.get(`${API_BASE_URL}/projects`);
      setProjects(data);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setDataLoading(false);
    }
  };

  const fetchProject = async (slug: string) => {
    try {
      setDataLoading(true);
      const { data } = await axios.get(`${API_BASE_URL}/projects?slug=${slug}`);
      setProject(data);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setDataLoading(false);
    }
  };

  const handleFetchError = (error: any) => {
    setFetchError(error);
    console.log(error);
  };
*/

  return (
    <FetcherContext.Provider
      value={{
        handleFormSubmition,
        loading,
        serverError,
      }}
    >
      {children}
    </FetcherContext.Provider>
  );
};
