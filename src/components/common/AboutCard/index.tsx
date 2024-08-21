import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classes from "./index.module.scss";
import { CardObject } from "../../../interface";
const AboutCard = ({ card }: { card: CardObject }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <li
      className={`flex flex-col justify-center text-center border border-gray-400 rounded-xl items-center cardGradient h-[250px] px-2 transition-all duration-75 ${classes.aboutCard}`}
    >
      <div>
        <LazyLoadImage
          className="w-16 h-16 object-cover"
          src={card.card.image}
          alt={card.card.title}
          placeholderSrc={card.card.image}
          effect={imageLoaded ? undefined : "blur"}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div>
        <p className="text-base mt-6 font-bold">{card.card.title}</p>
      </div>
    </li>
  );
};

export default AboutCard;
