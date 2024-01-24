import { Link, useLocation } from "react-router-dom";
import { cards } from "./about";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutCard from "../AboutCard";
const AboutLayout = () => {
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto"
      >
        <div>
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
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-4 lg:gap-6 justify-center mt-8 md:mt-16">
          {cards.map((card) => {
            return <AboutCard key={card.card.title} card={card} />;
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutLayout;
