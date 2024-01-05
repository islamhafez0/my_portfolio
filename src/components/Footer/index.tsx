import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { footerContent } from "../../constants";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import resume from "../../assets/resume.pdf";
const Footer = () => {
  const { user } = useFirebaseAuth();
  return (
    <section className="w-full mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        {/* <div className="mb-8">
          <Link
            to="/"
            className={`text-4xl md:text-6xl linearTitle flex items-center gap-3`}
          >
            <span className={classes.name}>EH</span>
          </Link>
        </div> */}
        <div className="flex justify-between flex-wrap gap-8">
          <div className="flex-shrink-0 w-full sm:w-2/6 lg:w-2/5">
            <div>
              <h3 className="text-3xl mb-4 md:mb-6 font-bold">Contact</h3>
              <ul className="flex flex-col gap-2">
                {Object.entries(footerContent.contact).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium">{key}: </span>
                    <span className="text-[14px] italic font-normal">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex mt-6 gap-4">
              {Object.values(footerContent.socialLinks).map((ele) => {
                return (
                  <a
                    key={ele.href}
                    className={`${classes.sociaIcon} transition-all linearBg text-white w-10 h-10 grid place-content-center rounded-full`}
                    href={ele.href}
                    target="_blank"
                    aria-label={`visit ${ele.href}`}
                  >
                    {ele.icon}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-start flex-shrink-0 w-full sm:w-2/6 lg:w-1/6">
            <h3 className="text-3xl mb-4 md:mb-6 font-bold">Links</h3>
            <ul className="flex items-start gap-2 flex-col">
              {Object.entries(footerContent.quickLinks).map(([key, value]) => (
                <li key={key}>
                  <a
                    rel={key === "resume" ? "noopener noreferrer" : ""}
                    href={key === "resume" ? resume : value}
                    target="_blank"
                    className="font-medium hover:pl-0.5 transition-all"
                    download={key === "resume" ? "resume.pdf" : undefined}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start flex-shrink-0 w-full sm:w-2/6 lg:w-[16%]">
            <h3 className="text-3xl mb-4 md:mb-6 font-bold">Info</h3>
            <ul className="flex items-start gap-2 flex-col">
              {Object.entries(footerContent.pages).map(([key, value]) => (
                <li key={key}>
                  <Link
                    to={value}
                    className="font-medium hover:pl-0.5 transition-all"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${
              user ? "justify-start" : "justify-center "
            } flex flex-col gap-4 flex-shrink-0 w-full sm:w-2/6 lg:w-[16%]`}
          >
            {user ? (
              <p>
                Welcome:{" "}
                <span className="font-medium linearColor">
                  {user.displayName?.split(" ")[0]}
                </span>
              </p>
            ) : (
              <>
                <Link
                  className={`${classes.sociaIcon} linearBg w-32 h-10 flex items-center justify-center rounded-sm`}
                  to="/auth/login"
                >
                  Login
                </Link>
                <Link
                  className={`${classes.sociaIcon} linearBg w-32 h-10 flex items-center justify-center rounded-sm`}
                  to="/auth/create-account"
                >
                  Create Account
                </Link>
              </>
            )}
          </div>
        </div>
        <p className="text-center mt-8 text-base text-gray-400">
          &copy; {new Date().getFullYear()} Eslam Hafez. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
