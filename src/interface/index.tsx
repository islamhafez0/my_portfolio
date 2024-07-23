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

export type ContactContextProps = {
  handleFormSubmition: (formData: ContactFormData) => Promise<void>;
  loading: boolean;
  serverError: null;
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

type SocialLink = {
  href: string;
  icon: ReactNode;
  aria_label: string;
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
    blog: string;
    profile: string;
    projects: string;
  };
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
