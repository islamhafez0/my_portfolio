import { ProjectTypes } from "../../interface";
import p1_1 from "../../assets/projects/project 1.png";
import p1_2 from "../../assets/projects/p1-2.jpg";
import p1_3 from "../../assets/projects/p1-3.jpg";

import p2_1 from "../../assets/projects/p2_1.jpg";
import p2_2 from "../../assets/projects/p2_2.jpg";
import p2_3 from "../../assets/projects/p2_3.jpg";

import p3_1 from "../../assets/projects/p3_1.webp";
import p3_2 from "../../assets/projects/p3_2.png";
import p3_3 from "../../assets/projects/p3_3.png";

import p4_1 from "../../assets/projects/p4_1.png";
import p6_1 from "../../assets/projects/p6_1.png";
import p7_1 from "../../assets/projects/p7_1.webp";

import p8_1 from "../../assets/projects/p8_1.webp";
import p8_2 from "../../assets/projects/p8_2.webp";
import p8_3 from "../../assets/projects/p8_3.webp";

import p9_1 from "../../assets/projects/p9_1.png";
export const projects: ProjectTypes[] = [
  {
    slug: "ecommerce-cms",
    images: [p8_1, p8_2, p8_3],
    title: "Ecommerce CMS",
    description:
      "Developed a cross-platform mobile app showcasing skills in Next.js, React, Typescript, Payload, Scss, and Stripe integration.",
    technologies: ["Next", "React", "Typescript", "Payload", "Scss", "Stripe"],
    github: "https://github.com/islamhafez0/BookFinderDemo",
  },
  {
    slug: "movies-project",
    images: [p3_1, p3_2, p3_3],
    title: "Movies Website",
    description:
      "Crafted an interactive multimedia project demonstrating creativity and innovation using React, Redux, JavaScript, and TMDB API.",
    technologies: ["React", "Redux", "JavaScript", "TMDB-API", "Scss"],
    github: "https://github.com/islamhafez0/MoviesDemo",
    demo: "https://movies-app-a67a7.web.app/",
  },
  {
    slug: "book-finder",
    images: [p7_1],
    title: "Book Finder",
    description:
      "Discover your next favorite book with this responsive website built using React and JavaScript. Utilizing the Open Library API, it provides real-time updates, allowing you to explore a vast collection of books. Experience a user-friendly interface for seamless book searching and find your next literary adventure.",
    technologies: ["React", "JavaScript", "Css"],
    github: "https://github.com/islamhafez0/BookFinderDemo",
    demo: "https://book-finder-demo-e007b.web.app/",
  },
  {
    slug: "dynamic-responsive-ecommerce",
    images: [p1_1, p1_2, p1_3],
    title: "Dynamic & Responsive E-Commerce",
    description:
      "Explore a dynamic and responsive web app highlighting proficiency in Next.js, Typescript, Stripe integration, Sanity CMS, and Tailwind styling.",
    technologies: ["Next.js", "Typescript", "Stripe", "Sanity", "Tailwind"],
    github: "https://github.com/islamhafez0/ecommerce-website",
    demo: "https://ecommerce-website-five-flax.vercel.app/",
  },
  {
    slug: "budget-app",
    images: [p9_1],
    title: "Budget App",
    description:
      "Built a mobile app for managing budgets using React, Javascript, and a Fake Server.",
    technologies: ["React", "Javascript", "Fake Server"],
    github: "https://github.com/islamhafez0/BudgetApp",
  },
  {
    slug: "blog-website-project",
    images: [p2_1, p2_2, p2_3],
    title: "Blog Website",
    description:
      "Designed an innovative UI/UX for this project, demonstrating a keen eye for user experience using Javascript, React, and Firebase.",
    technologies: ["Javascript", "React", "Firebase", "Formik"],
    github: "https://github.com/islamhafez0/BlogProject",
    demo: "https://blog-demo-d01c4.firebaseapp.com/",
  },
  {
    slug: "prayer-timings",
    images: [p4_1],
    title: "Prayer Timings App",
    description:
      "Built a cross-platform mobile app focusing on prayer timings using React, Javascript, and Athan API.",
    technologies: ["React", "Javsscript", "Athan-API"],
    github: "https://github.com/islamhafez0/prayer-timings",
    demo: "https://prayer-timings.vercel.app/",
  },
  {
    slug: "to-do-list-app",
    images: [p6_1],
    title: "Todo List App",
    description:
      "Responsive Todo List app built with React, JavaScript, and Athan API for prayer timings. Features real-time updates and category sorting.",
    technologies: ["React", "JavaScript", "Redux"],
    github: "https://github.com/islamhafez0/TodoListAppCodeRepo",
    demo: "https://todo-list-app-f2117.web.app/",
  },
];
