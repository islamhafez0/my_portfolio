import {
  ICertificateItemsDetails,
  IFooterProps,
  IFormProps,
  IpersonalItemsDetails,
  Links,
} from "./interface";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const navLinks: Links[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/pages/projects" },
  { name: "Profile", href: "/info/profile/me" },
  { name: "Blog", href: "/pages/blog" },
];

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
    Address: "Egypt, Beheira, Itay Elbaroud",
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
      aria_label: "Twitter",
    },
    thread: {
      href: "https://github.com/islamhafez0",
      icon: <FiGithub size={24} />,
      aria_label: "Thread",
    },
    linkedin: {
      href: "https://www.linkedin.com/in/islam-hafez-103902246/",
      icon: <FaLinkedin size={24} />,
      aria_label: "Linkedin",
    },
    whatsapp: {
      href: "https://wa.me/+201097423297",
      icon: <FaWhatsapp size={24} />,
      aria_label: "Whatsapp",
    },
  },
  quickLinks: {
    blog: "/pages/blog",
    profile: "/info/profile/me",
    projects: "/pages/projects",
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
      "Passionate Frontend Developer: I specialize in creating intuitive user interfaces and engaging digital experiences that leave a lasting impression.",
    key: "1",
  },
  {
    itemTitle:
      "Educational Background: I’m currently studying English Language and Translation at Damnhour University, balancing my love for languages with my passion for coding.",
    key: "2",
  },
  {
    itemTitle:
      "Lifelong Learner: I’m always looking to stay ahead of the curve by taking courses on platforms like Coursera and Udemy, constantly improving my knowledge and skills.",
    key: "3",
  },
  {
    itemTitle:
      "Technical Skills: I’m skilled in HTML5, CSS3, and JavaScript, with a strong focus on modern frameworks like React.js and Next.js.",
    key: "4",
  },
  {
    itemTitle:
      "Versatile with Tools: I’m proficient in using Git & GitHub for version control, ensuring smooth and efficient collaboration on projects.",
    key: "5",
  },
  {
    itemTitle:
      "Calm Under Pressure: I excel at adapting to new technologies and delivering high-quality work, even under tight deadlines.",
    key: "6",
  },
  {
    itemTitle:
      "Language Skills: I’m fluent in Arabic, my native language, and have a good command of English.",
    key: "7",
  },
  {
    itemTitle:
      "Project Highlights: I’ve successfully developed a range of projects, including a portfolio website, an ecommerce website with CMS integration and Stripe payments, a budget app built with React.js, and more.",
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
  {
    name: "Search Engine Optimization (SEO) with Squarespace",
    subname: "Coursera Project Network",
    link: "https://coursera.org/share/7dfba90717c368b6e250db1e1296ed35",
  },
];

export const markdownContent = "##Comming Soon";
