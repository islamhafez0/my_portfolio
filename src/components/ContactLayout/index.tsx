import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./index.module.scss";
import contactImage from "../../assets/img/contact-img.svg";
import bg from "../../assets/img/color-sharp.webp";
import { useFetcher } from "../../hooks/useFetcher";
import { ContactFormInputs } from "../../constants";
import { TUserContactData } from "../../interface";
import { Link, useLocation } from "react-router-dom";
import Alert from "../Alert";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView, motion } from "framer-motion";
const ContactLayout = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/pages/contact";
  const contactRef = useRef(null);
  const isInView = useInView(contactRef);
  if (isContactPage) {
    useEffect(() => {
      document.title = "Contact";
    }, []);
  }

  const [imageLoaded, setImageLoaded] = useState(false);
  const { handleFormSubmition, loading, serverError } = useFetcher();
  const [userData, setUserData] = useState<TUserContactData>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setUserData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(userData).some((value) => value.trim() === "")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    try {
      await handleFormSubmition(userData);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      setUserData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("faild to submit form", error);
    }
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };
  return (
    <section ref={contactRef} className="w-full mb-16 mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 90 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gray-400 text-base">Get in Touch</p>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl lg:text-5xl font-bold linearTitle mt-1 mb-4">
              Contact
            </h2>
            {!isContactPage && (
              <Link
                to="/pages/contact"
                className="linearColor text-base md:text-xl py-1 px-6"
              >
                Show
              </Link>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 place-items-center rounded-lg overflow-hidden mt-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -800 }}
            transition={{ duration: 0.9 }}
          >
            <LazyLoadImage
              className="w-full max-w-[500px] transition-opacity"
              src={contactImage}
              alt="contact image"
              placeholderSrc={contactImage}
              effect={imageLoaded ? undefined : "blur"}
              onLoad={() => setImageLoaded(true)}
              height={375}
            />
          </motion.div>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 800 }}
            transition={{ duration: 0.9 }}
            onSubmit={handleSubmit}
            className={`flex flex-col w-full ${classes.form} rounded-t-none  py-8 px-4 md:p-8 lg:rounded-l-none lg:rounded-lg gap-4`}
          >
            {error && (
              <span className="bg-red-500 p-4 font-medium">
                All fields are required
              </span>
            )}
            {ContactFormInputs.map((input) => (
              <div key={input.id}>
                <label className="mb-1.5 flex items-center" htmlFor={input.id}>
                  <span className="linearTitle mr-1 ">*</span>
                  {input.label}
                </label>
                {input.type === "textarea" ? (
                  <textarea
                    className={`w-full p-3 rounded-lg outline-none border border-transparent transition-all h-32 resize-none ${classes.input}`}
                    name={input.name}
                    id={input.id}
                    placeholder={input.label}
                    value={userData[input.name]}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    className={`w-full p-3 rounded-lg outline-none border border-transparent transition-all ${classes.input}`}
                    type={input.type}
                    name={input.name}
                    id={input.id}
                    placeholder={input.label}
                    value={userData[input.name]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
            <div className="flex-items-start mt-4">
              <button
                className={`${classes.btnHover} transition-all w-[115px] h-[40px] linearBg rounded-lg`}
                type="submit"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
      {alert && !serverError && (
        <>
          {ReactDOM.createPortal(
            <Alert
              message={"Info Sent successfully"}
              isOpen={alert}
              onClose={handleCloseAlert}
              type="success"
            />,
            document.getElementById("portal-root") as Element
          )}
        </>
      )}
      {alert && serverError !== null && (
        <>
          {ReactDOM.createPortal(
            <Alert
              message={"An error occurred. Please try again."}
              isOpen={alert}
              onClose={handleCloseAlert}
              type="error"
            />,
            document.getElementById("portal-root") as Element
          )}
        </>
      )}
    </section>
  );
};

export default ContactLayout;
