import { FirebaseAuthContext } from "../context/AuthContext";
import { IFirebaseAuthContextProps } from "../interface";
import { useContext } from "react";

export const useFirebaseAuth = (): IFirebaseAuthContextProps => {
  const context = useContext(FirebaseAuthContext);
  if (!context) {
    throw Error("You can't access auth context outside provider");
  }
  return context;
};
