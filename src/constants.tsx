import {
  ICertificateItemsDetails,
  IFooterProps,
  IFormProps,
  IpersonalItemsDetails,
} from "./interface";
import { FaXTwitter } from "react-icons/fa6";

import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const ContactFormInputs: IFormProps[] = [
  {
    label: "Your Name",
    id: "username",
    type: "text",
    name: "name",
  },
  {
    label: "Email",
    id: "userEmail",
    type: "email",
    name: "email",
  },
  {
    label: "Message",
    id: "userMessage",
    type: "textarea",
    name: "message",
  },
];

export const footerContent: IFooterProps = {
  contact: {
    Email: "moeslam843@gmail.com",
    Phone: "+20 1097423297",
    Address: "Egypt, Itay Elbaroud",
  },
  pages: {
    profile: "/info/profile/me",
    blog: "/pages/blog",
    contact: "/pages/contact",
  },
  socialLinks: {
    twitter: {
      href: "https://twitter.com/eslamhafez72",
      icon: <FaXTwitter size={24} />,
    },
    whatsapp: {
      href: "https://wa.me/+201097423297",
      icon: <IoLogoWhatsapp size={24} />,
    },
    linkedin: {
      href: "https://www.linkedin.com/in/islam-hafez-103902246/",
      icon: <FaLinkedin size={24} />,
    },
    github: {
      href: "https://github.com/islamhafez0",
      icon: <FaGithub size={24} />,
    },
  },
  quickLinks: {
    resume: "../../assets/resume.pdf",
    islamhafez0: "https://github.com/islamhafez0",
    eslamhafez7: "https://github.com/eslamhafez7",
  },
};

export const profileNavItems = [
  {
    title: "Personal Information",
    url: "/info/profile/me",
    icon: "/assets/icons/user.svg",
  },
  {
    title: "Certificates",
    url: "/info/profile/certificates",
    icon: "/assets/icons/orders.svg",
  },
  {
    title: "Education",
    url: "/info/profile/education",
    icon: "/assets/icons/purchases.svg",
  },
  {
    title: "Links",
    url: "/info/profile/links",
    icon: "/assets/icons/orders.svg",
  },
];

export const personalItemsDetails: IpersonalItemsDetails[] = [
  {
    itemTitle:
      "Passionate frontend developer: Crafting exceptional user interfaces and creating memorable digital experiences is my forte.",
    key: "1",
  },
  {
    itemTitle:
      "Educational background: Currently pursuing a degree in English Language and Translation at Damnhour University's Faculty of Arts.",
    key: "2",
  },
  {
    itemTitle:
      "Continuous learning: Committed to staying abreast of industry trends and enhancing skills through various online courses on platforms like Coursera and Udemy.",
    key: "3",
  },
  {
    itemTitle:
      "Technical expertise: Proficient in HTML5, CSS3, and JavaScript with a focus on modern frameworks such as React.js and Next.js.",
    key: "4",
  },
  {
    itemTitle:
      "Versatility in tools: Well-versed in using Git & GitHub for version control, ensuring collaborative and efficient development environments.",
    key: "5",
  },
  {
    itemTitle:
      "Adaptable under pressure: Demonstrated strength in quickly adapting to new technologies and delivering high-quality results in challenging scenarios.",
    key: "6",
  },
  {
    itemTitle:
      "Languages: Fluent in Arabic (Mother Tongue) and intermediate proficiency in English.",
    key: "7",
  },
  {
    itemTitle:
      "Project Highlights: Successfully developed a Portfolio Website, Ecommerce Website with CMS using Stripe, Budget App with React.js, and more.",
    key: "8",
  },
];
export const certificateItemsDetails: ICertificateItemsDetails[] = [
  {
    name: "Technical Support Fundamentals",
    subname: "Google",
    link: "https://coursera.org/share/2434b027620999c73b150e6bdac6f4d3",
  },
  {
    name: "English for Career Development",
    subname: "University of Pennsylvania",
    link: "https://coursera.org/share/027103156f06659f81e359782bee7e33",
  },
  {
    name: "Programming With Javascript",
    subname: "Meta",
    link: "https://coursera.org/share/63c15f3b5306ec64b756e597bc0e2d58",
  },
  {
    name: "Web Design for Everybody  Specialization",
    subname: "University of Michigan",
    link: "https://coursera.org/share/f8b23633019ce544dab748481de391ea",
  },
  {
    name: "Interpersonal Skills",
    subname: "IBM",
    link: "https://coursera.org/share/b32b2aa4f49f35080755dcf448b1fe0b",
  },
  {
    name: "Linux Commands and Shell Scripting",
    subname: "IBM",
    link: "https://coursera.org/share/da89efd329be57abdb7d979e10af0633",
  },
  {
    name: "Mastering Javascript",
    subname: "Youtube",
    link: "https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv",
  },
  {
    name: "Mastering React.js",
    subname: "Udemy",
    link: "https://www.udemy.com/share/1042GK3@m7a2B24pW9yi7MCATluCsQreHIn6vywDbp5OvBHHK7VbI6bFStEpeg7TvBn7waLzOA==/",
  },
];
