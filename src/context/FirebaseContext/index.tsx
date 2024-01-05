import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { ReactNode, createContext } from "react";

export const FirebaseContext = createContext<FirebaseApp | undefined>(
  undefined
);

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const app = initializeApp(firebaseConfig);
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
};
