import classes from "./index.module.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { useEffect, useState } from "react";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import { useAlert } from "../../hooks/useAlert";
import { Links } from "../../interface";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Header = () => {
  const { isAuth, logout } = useFirebaseAuth();
  const { showAlert, AlertComponent } = useAlert();
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

  const handleLogout = async () => {
    try {
      await logout();
      showAlert("Logged out successfully!", "success");
    } catch (error) {
      showAlert("An error occured", "error");
      console.log(error);
    }
  };

  const links: Links[] = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/pages/projects" },
    { name: "Profile", href: "/info/profile/me" },
    {
      name: isAuth ? "Logout" : "Login",
      href: isAuth ? "/auth/logout" : "/auth/login",
      onClick: isAuth ? handleLogout : undefined,
    },
  ];

  return (
    <header
      className={`header w-full px-4 md:px-8 py-4 ${
        location.pathname.includes("/projects") && "relative"
      } ${location.pathname === "/" && `fixed top-0 ${show}`}`}
    >
      <div className="flex justify-between items-center max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <Link
          to="/"
          className={`text-4xl md:text-6xl ${classes.logo} flex items-center gap-3`}
        >
          <span className={classes.name}>EH</span>
        </Link>
        <ul className={`hidden md:flex items-center gap-8`}>
          {links.map((link) => {
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
          <div>
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
                className="cursor-pointer w-[28px] transition-all"
                src={menu}
                placeholderSrc={menu}
                effect={imageLoaded ? undefined : "blur"}
                alt="menu"
                onClick={handlemenuClick}
                onLoad={() => setImageLoaded(true)}
              />
            )}
          </div>
          {showList && (
            <ul
              className={`bg-gray-900 flex items-center p-4 gap-2 flex-col w-[100px] h-[220px] absolute top-[2rem] right-0 z-10 ${classes.menuList}`}
            >
              {links.map((link) => {
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

export default Header;
