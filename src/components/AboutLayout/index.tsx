import classes from "./index.module.scss";
import { Link, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cards } from "./about";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
const AboutLayout = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/pages/about";
  const aboutRef = useRef<null>(null);
  const isInView = useInView(aboutRef);
  if (isAboutPage) {
    useEffect(() => {
      document.title = "About";
    }, []);
  }

  return (
    <section
      ref={aboutRef}
      className="w-full mb-16 mt-16 px-4 md:px-8 py-4 overflow-hidden"
    >
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 90 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gray-400 text-base">Introduction</p>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl lg:text-5xl font-bold linearTitle mt-1 mb-4">
              Overview
            </h2>
            {!isAboutPage && (
              <Link
                to="/pages/about"
                className="linearColor text-base md:text-xl py-1 px-6"
              >
                Show
              </Link>
            )}
          </div>
          <div className="md:max-w-[500px]">
            <p className="text-gray-400">
              Eslam Hafez, Code Artisan mastering the realms of React, Next.js,
              and TypeScript – a trinity of tech brilliance.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -400 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row flex-wrap gap-4 lg:gap-6 justify-center mt-8 md:mt-16"
        >
          {cards.map((card, index) => {
            return (
              <motion.div
                initial="hidden"
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -400 }}
                transition={{ duration: 0.5, delay: 0.4 * index + 0.2 }}
                key={card.card.title}
                className={`flex flex-col justify-center text-center border border-gray-400 rounded-xl items-center cardGradient w-full  md:w-2/5 lg:w-1/5 h-[250px] px-2 transition-all duration-75 ${classes.aboutCard}`}
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
                  <p className="text-[19px] mt-6 font-bold">
                    {card.card.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {isAboutPage && <div>Education</div>}
      </div>
    </section>
  );
};

export default AboutLayout;
