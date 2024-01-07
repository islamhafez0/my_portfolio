import backendImage from "../../assets/backend.webp";
import webImage from "../../assets/web.webp";
import creatorImage from "../../assets/creator.webp";
import mobileImage from "../../assets/mobile.webp";
import { CardObject } from "../../interface";

export const cards: CardObject[] = [
  {
    card: { image: backendImage, title: "Javascript", transitionDelay: 0 },
  },
  {
    card: { image: webImage, title: "Typescript", transitionDelay: 1 },
  },
  {
    card: { image: creatorImage, title: "React.JS", transitionDelay: 2 },
  },
  {
    card: { image: mobileImage, title: "Next.JS", transitionDelay: 3 },
  },
];
