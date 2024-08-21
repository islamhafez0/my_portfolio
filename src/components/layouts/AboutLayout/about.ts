import backendImage from "/assets/backend.webp";
import webImage from "/assets/web.webp";
import creatorImage from "/assets/creator.webp";
import mobileImage from "/assets/mobile.webp";
import { CardObject } from "../../../interface";

export const cards: CardObject[] = [
  {
    card: { image: backendImage, title: "Frontend Frameworks", transitionDelay: 0 },
  },
  {
    card: { image: creatorImage, title: "TypeScript in Action", transitionDelay: 2 },
  },
  {
    card: { image: webImage, title: "BaaS Fullstack Apps", transitionDelay: 1 },
  },
  {
    card: { image: mobileImage, title: "Interactive UI Design", transitionDelay: 3 },
  },
];
