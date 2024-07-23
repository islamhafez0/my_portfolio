import { useRef } from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { footerContent } from "../../../constants";
import resume from "/assets/resume.pdf";
import { useInView, motion } from "framer-motion";
export const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef);
  return (
    <footer ref={footerRef} className="w-full mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between flex-wrap gap-8"
        >
          <div className="flex-shrink-0 w-full sm:w-2/6 lg:w-2/5">
            <div>
              <h3 className="text-3xl mb-4 md:mb-6 font-bold">Contact</h3>
              <ul className="flex flex-col gap-2 pl-4">
                {Object.entries(footerContent.contact).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium">{key}: </span>
                    <span className="text-[14px] italic font-normal text-gray-400">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start flex-shrink-0 w-full sm:w-2/6 lg:w-1/6">
            <h3 className="text-3xl mb-4 md:mb-6 font-bold">Links</h3>
            <ul className="flex items-start gap-2 flex-col pl-4">
              {Object.entries(footerContent.quickLinks).map(([key, value]) => (
                <li key={key}>
                  <Link
                    to={value}
                    className="font-medium transition-all text-gray-400 hover:text-white"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="flex gap-2">
              {Object.values(footerContent.socialLinks).map(
                ({ aria_label, href, icon }) => {
                  return (
                    <li key={href}>
                      <a
                        className={`${classes.socialIcon} transition-all text-white w-10 h-10 grid place-content-center rounded-full`}
                        href={href}
                        target="_blank"
                        aria-label={aria_label}
                      >
                        {icon}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
            <a
              href={resume}
              download="resume"
              className="flex w-[216px]  gap-2 items-center px-10 py-3 font-medium rounded-full btnPrimary mt-8"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        <p className="text-center mt-8 text-base text-gray-400">
          &copy; {new Date().getFullYear()} Eslam Hafez. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
