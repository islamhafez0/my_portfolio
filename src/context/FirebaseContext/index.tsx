import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { ReactNode, createContext } from "react";
import { Analytics, getAnalytics } from "firebase/analytics";

interface FirebaseContextProps {
  app: FirebaseApp;
  analytics: Analytics;
}

export const FirebaseContext = createContext<FirebaseContextProps | undefined>(
  undefined
);

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <FirebaseContext.Provider value={{ app, analytics }}>
      {children}
    </FirebaseContext.Provider>
  );
};
