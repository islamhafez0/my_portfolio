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
  {
    name: "Search Engine Optimization (SEO) with Squarespace",
    subname: "Coursera Project Network",
    link: "https://coursera.org/share/7dfba90717c368b6e250db1e1296ed35",
  },
];

export const markdownContent = `# Meet Eslam Hafez: Frontend Developer

Greetings! I'm **Eslam Hafez**, a frontend developer passionate about crafting exceptional user interfaces and creating memorable digital experiences. My journey in web development has equipped me with the skills to bring ideas to life through clean and efficient code.

## Education

- **English Language and Translation** - Damnhour University's Faculty of Arts

## Courses

- **Technical Support Fundamentals** - Coursera
- **English for Career Development** - Coursera
- **Interpersonal Skills Course** - Coursera
- **Web Design for Everybody: Basics of Web Development & Coding Specialization** - Coursera
- **Hands-on Introduction to Linux Commands and Shell Scripting** - Coursera
- **JavaScript** - YouTube
- **React 18 (React, Redux, Hooks, Router, etc.)** - Udemy
- **Next.js** - YouTube
- **TypeScript** - YouTube

## Skills

- **JavaScript**
- **TypeScript**
- **Nodejs**
- **MongoDB**
- **Express**
- **Next.js**
- **React.js**
- **HTML5**
- **CSS3**
- **Tailwind CSS**
- **Firebase**
- **Appwrite**
- **Clerk**
- **SEO**
- **Git & GitHub**

## Projects

- **Portfolio Website**: Showcases my work and skills
- **Ecommerce Website**: CMS with Stripe integration
- **Budget App**: Built with React.js
- **Movies Website**: Utilizes the TMDB API
- **Blog Website**: Blogging Nest platform
- **Book Finder**: Developed with Next.js
- **Prayer Timings**: Created using React.js

## Professional Strengths

- Quick Learner
- Collaborative Team Player
- Self-Taught Enthusiast
- Adaptable Under Pressure

## Languages

- **Arabic**: Mother Tongue
- **English**: Intermediate Level

## Summary

I am a passionate frontend developer with a solid foundation in HTML5, CSS3, and JavaScript. I excel at building visually appealing and user-centric web experiences. My expertise in React.js and Next.js allows me to create dynamic and responsive applications, while my knowledge of TypeScript enhances code maintainability and scalability. I'm well-versed in Git & GitHub for version control, which helps foster collaborative development environments. My strengths include quick adaptation to new technologies, effective collaboration within cross-functional teams, and delivering high-quality results under pressure. I am committed to continuous learning and self-improvement, as evidenced by my completion of various courses and keeping up with industry trends.

## Contact

- **Email**: moeslam843@gmail.com
- **Phone**: +20 1097423297
- **Location**: Egypt, Beheira, Itay Elbaroud

## Connect with Me

- [GitHub](https://github.com/islamhafez0)
- [LinkedIn](https://www.linkedin.com/in/islam-hafez-103902246/)

Feel free to reach out if you'd like to collaborate or learn more about my work!
`;
