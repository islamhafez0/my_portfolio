import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import image from "../../assets/img/form-image.svg";
import google from "../../assets/providers/google.png";
import twitter from "../../assets/providers/twitter.png";
import github from "../../assets/providers/github.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { createAccountInputs } from "./createAccount";
import { TUserCreateAccountData } from "../../interface";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import classes from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "../../hooks/useAlert";
const CreateAccountLayout = () => {
  useEffect(() => {
    document.title = "Create Account";
  }, []);
  const { signinWithGoogle, signinWithGithub, signinWithTwitter } =
    useFirebaseAuth();
  interface ProviderImage {
    image: string;
    alt: string;
    onClick: () => Promise<boolean>;
  }
  const providersImages: ProviderImage[] = [
    { image: google, alt: "google", onClick: signinWithGoogle },
    { image: twitter, alt: "twitter", onClick: signinWithTwitter },
    { image: github, alt: "github", onClick: signinWithGithub },
  ];
  const navigate = useNavigate();
  const { signup, error, setError, firebaseLoading } = useFirebaseAuth();

  const [userDate, setUserData] = useState<TUserCreateAccountData>({
    displayName: "",
    email: "",
    password: "",
  });

  const [inputError, setInputError] = useState(false);

  const { showAlert, AlertComponent } = useAlert();

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setInputError(false);
      setError(null);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [error, inputError]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setUserData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputError(false);
    if (userDate.displayName.trim() === "") {
      setInputError(true);
      return;
    }
    const successSignup = await signup(userDate);
    if (successSignup) {
      setUserData({
        displayName: "",
        email: "",
        password: "",
      });
      showAlert("Signup successfully", "success");
      navigate("/");
    }
  };

  return (
    <section className="w-full mb-16 mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
          <div className="flex-shrink-0 absolute bottom-0 lg:relative -z-10 w-full lg:w-2/5">
            <LazyLoadImage
              src={image}
              alt="create account"
              loading="lazy"
              className="w-full max-w-[600px] object-cover transition-all"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className={`${classes.form} flex-shrink-0 w-full lg:w-2/4 px-4 py-8 flex flex-col justify-center rounded-md`}
          >
            <div>
              <h3 className="text-3xl font-bold py-4">Create new account</h3>
              {error && (
                <p className="bg-red-500 text-white p-4 mb-4">{error}</p>
              )}
              {inputError && (
                <p className="bg-red-500 text-white p-4 mb-4">
                  All fields are required
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              {createAccountInputs.map((input) => (
                <label htmlFor={input.id} key={input.id}>
                  {input.label}
                  <input
                    className={`block w-full mt-1 p-3 rounded-lg outline-none border border-transparent transition-all ${classes.input}`}
                    type={input.type}
                    name={input.name}
                    id={input.id}
                    value={userDate[input.name]}
                    onChange={handleChange}
                  />
                </label>
              ))}
            </div>
            <button
              type="submit"
              className={`${classes.btnHover} mt-6 transition-all w-[140px] h-[45px] font-medium linearBg rounded-lg text-[17px]`}
            >
              {firebaseLoading ? "Loading" : "Create Account"}
            </button>
            <div className="flex items-center gap-3 mx-auto mb-4 mt-8">
              {providersImages.map((item) => {
                return (
                  <li
                    key={item.alt}
                    className={`${classes.imageHover} w-12 h-12 grid place-content-center bg-white cursor-pointer rounded-full`}
                    onClick={async () => {
                      const success = await item.onClick();
                      if (success) {
                        showAlert(
                          `Successfully signed in with ${item.alt}`,
                          "success"
                        );
                        setTimeout(() => {
                          navigate("/");
                        }, 1000);
                      }
                    }}
                  >
                    <img
                      className={`${
                        item.image.includes("github") ? "w-10" : "w-8 h-8"
                      }`}
                      src={item.image}
                      alt={item.alt}
                    />
                  </li>
                );
              })}
            </div>
            <div className="text-center">
              <Link to="/auth/login" className=" lg:mt-0">
                Already have an account?
              </Link>
              <Link to="/" className="block mt-4">
                Back Home
              </Link>
            </div>
          </form>
        </div>
      </div>
      <AlertComponent />
    </section>
  );
};

export default CreateAccountLayout;
