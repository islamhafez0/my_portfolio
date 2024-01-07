import { ReactNode } from "react";
import { FetcherProvider } from "../FetcherContext";
import { FirebaseProvider } from "../FirebaseContext";
import { FirebaseAuthProvider } from "../AuthContext";
import { IntersectionProvider } from "../IntersectionObserverContext";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <IntersectionProvider>
      <FetcherProvider>
        <FirebaseProvider>
          <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
        </FirebaseProvider>
      </FetcherProvider>
    </IntersectionProvider>
  );
};

export default AppProvider;
