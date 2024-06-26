import { User } from "firebase/auth";
import { ReactNode } from "react";

export type Links = {
  name: string;
  href: string | null;
  onClick?: () => void;
};

export type Card = {
  image: string;
  title: string;
  transitionDelay: number;
};
export type CardObject = {
  card: Card;
};

export type ProjectTypes = {
  slug: string;
  images: string[];
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
};

export type Skills = {
  src: string;
  name: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type FetcherContextProps = {
  handleFormSubmition: (formData: ContactFormData) => Promise<void>;
  loading: boolean;
  serverError: null;
  // fetchProjects: () => Promise<void>;
  // fetchProject: (slug: string) => Promise<void>;
  // projects: ProjectTypes[];
  // project: ProjectTypes | null;
  // fetchError: null | any;
  // dataLoading: boolean;
};

export type TUserContactData = {
  name: string;
  email: string;
  message: string;
};
export type IFormProps = {
  label: string;
  id: string;
  type: string;
  name: keyof TUserContactData;
};

export interface IFirebaseAuthContextProps {
  signup: (data: {
    email: string;
    password: string;
    displayName: string;
  }) => Promise<boolean>;
  signin: (data: { email: string; password: string }) => Promise<boolean>;
  logout: () => Promise<void>;
  signinWithGoogle: () => Promise<any>;
  signinWithGithub: () => Promise<any>;
  signinWithTwitter: () => Promise<any>;
  error: null;
  firebaseLoading: boolean;
  user: User | null;
  isAuth: boolean;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface IUser {
  displayName: string | null;
  email: string;
  photoURL?: string;
  phoneNumber?: number | null;
}

type SocialLink = {
  href: string;
  icon: ReactNode;
  aria_label: string
};

export type IFooterProps = {
  contact: {
    Email: string;
    Phone: string;
    Address: string;
  };
  pages: {
    profile: string;
    blog: string;
    contact: string;
  };
  socialLinks: {
    twitter: SocialLink;
    whatsapp: SocialLink;
    linkedin: SocialLink;
    thread: SocialLink;
  };
  quickLinks: {
    resume: string;
    eslamhafez7: string;
    islamhafez0: string;
  };
};

export type TUserCreateAccountData = {
  displayName: string;
  email: string;
  password: string;
};
export type TCreateAccountInputProps = {
  type: string;
  name: keyof TUserCreateAccountData;
  id: string;
  label: string;
};

type TUserLoginData = {
  email: string;
  password: string;
};

export type TLoginAccountPops = {
  type: string;
  name: keyof TUserLoginData;
  id: string;
  label: string;
};

export interface CustomLazyLoadImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export interface IpersonalItemsDetails {
  itemTitle: string;
  key: string;
}
export interface ICertificateItemsDetails {
  name: string;
  subname: string;
  link: string;
}
export interface ILinkItemsDetails {
  image: string;
  alt: string;
  link: string;
}
export type IntersectionTypes = {
  inView: boolean;
  observe: (target: Element) => void;
  unobserve: (target: Element) => void;
};
