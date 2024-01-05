import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getAuth,
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signOut,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { FirebaseContext } from "../FirebaseContext";
import { IFirebaseAuthContextProps } from "../../interface";
import { FirebaseError } from "firebase/app";
export const FirebaseAuthContext = createContext<
  IFirebaseAuthContextProps | undefined
>(undefined);
export const FirebaseAuthProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<any | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [firebaseLoading, setFirebaseLoading] = useState(false);
  const { app }: any = useContext(FirebaseContext);
  const auth: Auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user);
        setUser(user);
      } else {
        console.log("User not found");
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  const signup = async ({
    email,
    password,
    displayName,
  }: {
    email: string;
    password: string;
    displayName: string;
  }) => {
    try {
      setFirebaseLoading(true);
      const creds = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(creds.user, { displayName });
      await sendEmailVerification(creds.user);
      return true;
    } catch (error) {
      handleError(error);
      return false;
    } finally {
      setFirebaseLoading(false);
    }
  };

  const signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setFirebaseLoading(true);
      const creds = await signInWithEmailAndPassword(auth, email, password);
      console.log(creds);
      return true;
    } catch (error) {
      handleError(error);
      return false;
    } finally {
      setFirebaseLoading(false);
    }
  };

  const logout = async () => {
    try {
      setFirebaseLoading(true);
      await signOut(auth);
    } catch (error) {
      handleError(error);
    } finally {
      setFirebaseLoading(false);
    }
  };

  const signinWithProvider = async (provider: any) => {
    try {
      setFirebaseLoading(true);
      const creds = await signInWithPopup(auth, provider);
      console.log(creds);
      return true;
    } catch (error) {
      handleError(error);
      return false;
    } finally {
      setFirebaseLoading(false);
    }
  };

  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return await signinWithProvider(provider);
  };

  const signinWithGithub = async () => {
    const provider = new GithubAuthProvider();
    return await signinWithProvider(provider);
  };

  const signinWithTwitter = async () => {
    const provider = new TwitterAuthProvider();
    return await signinWithProvider(provider);
  };

  const handleError = (error: any) => {
    if (error instanceof FirebaseError) {
      setError(error.message);
    } else {
      setError("An Error Occurred");
    }
  };

  return (
    <FirebaseAuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        signinWithGoogle,
        signinWithGithub,
        signinWithTwitter,
        error,
        firebaseLoading,
        user,
        isAuth: !!user,
        setError,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
