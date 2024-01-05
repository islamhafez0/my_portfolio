import { ReactNode } from "react";
import { FetcherProvider } from "../FetcherContext";
import { FirebaseProvider } from "../FirebaseContext";
import { FirebaseAuthProvider } from "../AuthContext";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <FetcherProvider>
      <FirebaseProvider>
        <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
      </FirebaseProvider>
    </FetcherProvider>
  );
};

export default AppProvider;
