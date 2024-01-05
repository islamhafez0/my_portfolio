import { Skills } from "../../interface";
import cssImage from "../../assets/tech/css.png";
import figmaImage from "../../assets/tech/figma.png";
import gitImage from "../../assets/tech/git.png";
import htmlImage from "../../assets/tech/html.png";
import javascriptImage from "../../assets/tech/javascript.png";
import typescriptImage from "../../assets/tech/typescript.png";
import reactjsImage from "../../assets/tech/reactjs.png";
import tailwindImage from "../../assets/tech/tailwind.png";
import reduxImage from "../../assets/tech/redux.png";
import apiImage from "../../assets/tech/api.png";
import nodejsImage from "../../assets/tech/nodejs.png";
import scssImage from "../../assets/tech/scss.png";
import bootstrapImage from "../../assets/tech/bootstrap.png";
import firebaseImage from "../../assets/tech/firebase.png";
import nextImage from "../../assets/tech/next.png";
import materialUiImage from "../../assets/tech/material-ui.png";

import { MdOutlineOpenInNew } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useMemo, useState } from "react";

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
    ],
    []
  );
  const [imageLoaded, setImageLoaded] = useState(false);
  const location = useLocation();
  const isSkillsPage = location.pathname === "/pages/skills";
  if (isSkillsPage) {
    useEffect(() => {
      document.title = "Skills";
    }, []);
  }

  return (
    <section className="w-full mb-16 mt-16 px-4 md:px-8 py-4 ">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400 text-base">Craftsmanship</p>
          <h2
            className={`linearTitle text-2xl lg:text-5xl font-bold linearTitle mb-4 p-2`}
          >
            Tech Tapestry
          </h2>
        </div>
        <div className="w-full flex justify-center mt-6">
          <div className="flex items-center justify-center flex-wrap w-full max-w-[600px] lg:max-w-[800px] gap-4">
            {skills.map((skill) => {
              return (
                <div
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
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <Link
            to={isSkillsPage ? "/" : "/pages/skills"}
            className={`btnSecondry flex gap-2 items-center px-12 py-2 border font-medium rounded-full`}
          >
            <span className="text-[18px]">
              {isSkillsPage ? "Back Home" : "Show"}
            </span>
            <MdOutlineOpenInNew size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsLayout;
