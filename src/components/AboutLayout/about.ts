import backendImage from "../../assets/backend.png";
import webImage from "../../assets/web.png";
import creatorImage from "../../assets/creator.png";
import mobileImage from "../../assets/mobile.png";
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
