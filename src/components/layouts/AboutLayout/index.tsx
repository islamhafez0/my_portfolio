import { cards } from "./about";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutCard from "../../common/AboutCard";
const AboutLayout = () => {
  const aboutRef = useRef<null>(null);
  const isInView = useInView(aboutRef);

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
          <h2 className="text-2xl lg:text-5xl font-bold linearTitle mt-1 mb-4">
            Overview
          </h2>
          <div className="md:max-w-[500px]">
            <p className="text-gray-400">
              Eslam Hafez, a code artisan, is on a journey to master the
              powerful trio of React, Next.js, and TypeScript, crafting
              exceptional web experiences along the way.
            </p>
          </div>
        </div>
        <ul className="gap-4 mt-8 md:mt-16 grid-box">
          {cards.map((card) => {
            return <AboutCard key={card.card.title} card={card} />;
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default AboutLayout;
