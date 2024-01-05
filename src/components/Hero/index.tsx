import classes from "./index.module.scss";
import { IoFlashOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import heroImage from "../../assets/hero-image.webp";
import personImage from "../../assets/person.svg";
import star from "../../assets/star.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";

const Hero = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const [imageLoaded, setImageLoaded] = useState({
    personImage: false,
    heroImage: false,
  });

  const handleImageLoaded = (imageName: string) => {
    setImageLoaded((prev) => ({
      ...prev,
      [imageName]: true,
    }));
  };

  return (
    <main>
      <section className="w-full mb-8 px-4 md:px-8 py-4">
        <div className="flex flex-col justify-center items-center max-w-2xl sm:px-5 lg:max-w-7xl mx-auto relative">
          <div
            className={`${
              imageLoaded.heroImage ? "loaded" : "loading"
            } absolute inset-0 flex justify-center -z-10`}
          >
            <LazyLoadImage
              src={heroImage}
              placeholderSrc={heroImage}
              className={`${classes.heroImage} transition-all absolute left-2/4 -translate-x-2/4 w-full sm:w-[500px] lg:w-[700px] mb-24 sm:mb-36 -z-30`}
              alt="hero"
              onLoad={() => handleImageLoaded("heroImage")}
              loading="lazy"
            />
          </div>
          <div className="p-4 md:p-8">
            <h1 className="text-[2rem] md:text-5xl lg:text-6xl  text-center font-bold mt-16">
              Magical content design <br />
              <span
                className={`${classes.introTitle} p-0 mt-2 sm:mt-0 sm:p-4 flex items-center justify-center`}
              >
                Frontend Developer
              </span>
            </h1>
            <p className="text-base md:text-3xl text-gray-300 text-center mt-4">
              Crafting beautiful and intuitive digital experiences
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            <LinkButton
              to="/pages/projects"
              btnClass={classes.btnPrimary}
              icon={<IoFlashOutline size={24} />}
              text="view projects"
            />
            <LinkButton
              to="/pages/contact"
              btnClass={classes.btnSecondry}
              icon={<TiContacts size={24} />}
              text="contact me"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center mt-6 gap-2 font-medium">
            <LazyLoadImage
              src={personImage}
              placeholderSrc={personImage}
              effect={imageLoaded.personImage ? undefined : "blur"}
              delayMethod="debounce"
              alt="person"
              onLoad={() => handleImageLoaded("personImage")}
            />
            <div className="flex items-center">
              <p>Trusted </p>
              <img className="mx-2" src={star} alt="star" />
              <p> by developers</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

interface LinkButtonProps {
  to: string;
  text: string;
  btnClass: string;
  icon: React.ReactElement<IconType>;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  icon,
  text,
  btnClass,
}) => (
  <Link
    to={to}
    className={`${btnClass} flex gap-2 items-center px-10 py-3  font-medium rounded-full`}
  >
    {icon}
    <p className="text-[18px]">{text}</p>
  </Link>
);

export default Hero;
