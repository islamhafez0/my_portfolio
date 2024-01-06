import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { ReactNode, createContext } from "react";
import { getAnalytics } from "firebase/analytics";

export const FirebaseContext = createContext<FirebaseApp | undefined>(
  undefined
);

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
};
