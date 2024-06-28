import { useEffect, useMemo, useRef, useState } from "react";
import { Skills } from "../../interface";
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
} from "../../assets/tech";
import { motion, useInView } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const isSkillsPage = location.pathname === "/pages/skills";
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef);
  if (isSkillsPage) {
    useEffect(() => {
      document.title = "Skills";
    }, []);
  }

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center justify-center mt-8"
        >
          <Link
            to={isSkillsPage ? "/" : "/pages/skills"}
            className={`btnSecondry flex gap-2 items-center px-12 py-2 border font-medium rounded-full`}
          >
            <span className="text-[18px]">
              {isSkillsPage ? "Back Home" : "Show"}
            </span>
            <MdOutlineOpenInNew size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsLayout;
