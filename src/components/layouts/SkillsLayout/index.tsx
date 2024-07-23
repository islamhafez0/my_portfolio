import { useMemo, useRef, useState } from "react";
import { Skills } from "../../../interface";
import {
  htmlImage,
  cssImage,
  javascriptImage,
  typescriptImage,
  reactjsImage,
  nextImage,
  firebaseImage,
  bootstrapImage,
  tailwindImage,
  materialUiImage,
  scssImage,
  gitImage,
  reduxImage,
  figmaImage,
  apiImage,
  nodejsImage,
  mongodbImage,
} from "./tech";
import { motion, useInView } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SkillsLayout = () => {
  const skills: Skills[] = useMemo(
    () => [
      { src: htmlImage, name: "html" },
      { src: cssImage, name: "css" },
      { src: javascriptImage, name: "javascript" },
      { src: typescriptImage, name: "typescript" },
      { src: reactjsImage, name: "reactjs" },
      { src: nextImage, name: "next" },
      { src: firebaseImage, name: "firebase" },
      { src: bootstrapImage, name: "bootstrap" },
      { src: tailwindImage, name: "tailwind" },
      { src: materialUiImage, name: "materialUi" },
      { src: scssImage, name: "scss" },
      { src: gitImage, name: "git" },
      { src: reduxImage, name: "redux" },
      { src: figmaImage, name: "figma" },
      { src: apiImage, name: "deal with api" },
      { src: nodejsImage, name: "nodejs" },
      { src: mongodbImage, name: "mongodb" },
    ],
    []
  );

  const [imageLoaded, setImageLoaded] = useState(false);
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef);

  return (
    <section
      ref={skillsRef}
      className="w-full mb-16 mt-16 px-4 md:px-8 py-4 overflow-hidden"
    >
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-gray-400 text-base">Craftsmanship</p>
          <h2
            className={`linearTitle text-2xl lg:text-5xl font-bold linearTitle mb-4 p-2`}
          >
            Tech Tapestry
          </h2>
        </motion.div>
        <div className="w-full flex justify-center mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center flex-wrap w-full max-w-[600px] lg:max-w-[800px] gap-4"
          >
            {skills.map((skill, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  key={skill.name}
                  className={` w-20 h-20 bg-gray-100 grid place-content-center rounded-full hover:shadow-md hover:bg-gray-400 transition-all`}
                >
                  <LazyLoadImage
                    className={`w-14 h-14 transition-all`}
                    src={skill.src}
                    alt={skill.name}
                    effect={imageLoaded ? undefined : "blur"}
                    onLoad={() => setImageLoaded(true)}
                    delayMethod="throttle"
                    placeholderSrc={skill.src}
                    style={{
                      width: "56px",
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsLayout;
