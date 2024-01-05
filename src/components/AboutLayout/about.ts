import backendImage from "../../assets/backend.webp";
import webImage from "../../assets/web.webp";
import creatorImage from "../../assets/creator.webp";
import mobileImage from "../../assets/mobile.webp";
import { CardObject } from "../../interface";

export const cards: CardObject[] = [
  {
    card: { image: backendImage, title: "Javascript" },
  },
  {
    card: { image: webImage, title: "Typescript" },
  },
  {
    card: { image: creatorImage, title: "React.JS" },
  },
  {
    card: { image: mobileImage, title: "Next.JS" },
  },
];
