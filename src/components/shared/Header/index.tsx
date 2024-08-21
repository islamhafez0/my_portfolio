import classes from "./index.module.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import menu from "/assets/menu.svg";
import close from "/assets/close.svg";
import { useEffect, useState } from "react";
import { useAlert } from "../../../hooks/useAlert";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { navLinks } from "../../../constants";

export const Header = () => {
  const { AlertComponent } = useAlert();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showList, setShowList] = useState(false);
  const [scrollYEnd, setScrollYEnd] = useState(0);
  const [show, setShow] = useState("top");
  const location = useLocation();

  const HeaderController = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > scrollYEnd) {
        setShow("hide");
      } else {
        setShow("show");
      }
      setScrollYEnd(window.scrollY);
    } else {
      setShow("top");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", HeaderController);
    return () => {
      window.removeEventListener("scroll", HeaderController);
    };
  }, [scrollYEnd]);

  const handlemenuClick = () => {
    setShowList(!showList);
  };
  window.addEventListener("scroll", () => {
    setShowList(false);
  });

  return (
    <header
      className={`header w-full px-4 md:px-8 py-4 ${
        location.pathname.includes("/projects") && "relative"
      } ${location.pathname === "/" && `fixed top-0 ${show}`}`}
    >
      <div className="flex justify-between items-center max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <Link
          to="/"
          className={`text-2xl ${classes.logo} flex items-center gap-3`}
        >
          <span className={classes.name}>Eslam Hafez</span>
        </Link>
        <ul className={`hidden md:flex items-center gap-8`}>
          {navLinks.map((link) => {
            return (
              <li key={link.name}>
                {link.href && (
                  <NavLink
                    to={link.href}
                    className={` ${classes.navLink} ${
                      location.pathname === link.href && classes.active
                    } transition-all font-medium text-[18px] text-gray-100 `}
                    onClick={link.onClick}
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            );
          })}
          <li>
            <a
              aria-label="github"
              href="https://github.com/islamhafez0"
              target="_blank"
              className="bg-gray-100 hover:bg-black hover:text-gray-100 hover:border transition-all text-black w-10 h-10 rounded-full grid place-content-center"
            >
              <FiGithub size={22} />
            </a>
          </li>
        </ul>
        <div className="menu md:hidden gap-4 relative">
          <button className="w-11 h-11 hover:bg-gray-900 rounded-full flex items-center justify-center transition-all">
            {showList ? (
              <LazyLoadImage
                className="cursor-pointer w-[20px] transition-all"
                src={close}
                placeholderSrc={close}
                alt="close"
                onClick={handlemenuClick}
              />
            ) : (
              <LazyLoadImage
                className="cursor-pointer w-[24px] transition-all"
                src={menu}
                placeholderSrc={menu}
                effect={imageLoaded ? undefined : "blur"}
                alt="menu"
                onClick={handlemenuClick}
                onLoad={() => setImageLoaded(true)}
              />
            )}
          </button>
          {showList && (
            <ul
              className={`bg-gray-900 flex items-center p-4 gap-2 flex-col w-36 h-56 absolute top-14 right-[11px] z-10 ${classes.menuList}`}
            >
              {navLinks.map((link) => {
                return (
                  <li key={link.name}>
                    {link.href && (
                      <NavLink
                        to={link.href}
                        className={` ${classes.navLink} ${
                          location.pathname === link.href && classes.active
                        } transition-all font-medium text-[18px] text-gray-100 `}
                        onClick={link.onClick}
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </li>
                );
              })}
              <a
                href="https://github.com/islamhafez0"
                target="_blank"
                className="bg-gray-100 hover:bg-black hover:text-gray-100 transition-all text-black w-8 h-8 rounded-full grid place-content-center mt-2"
              >
                <FiGithub size={22} />
              </a>
            </ul>
          )}
        </div>
      </div>
      <AlertComponent />
    </header>
  );
};
