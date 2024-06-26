import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import classes from "./index.module.scss";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import { loginInputProps } from "./login";
import { useAlert } from "../../hooks/useAlert";
import { Link, useNavigate } from "react-router-dom";

const LoginLayout = () => {
  const { showAlert, AlertComponent } = useAlert();
  const { error, firebaseLoading, signin, setError } = useFirebaseAuth();
  const [userDate, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setError(null);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [error]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.values(userDate).some(value => value === "")) return
    const successLogin = await signin(userDate);
    if (successLogin) {
      setUserData({
        email: "",
        password: "",
      });
      showAlert(`Login Successfully`, "success");
      navigate("/");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setUserData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
  return (
    <section className="w-full mb-16 mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto relative">
        <div className="relative w-full">
          <form
            onSubmit={handleSubmit}
            className={`${classes.form} flex-shrink-0 w-full lg:w-2/3 px-4 mx-auto py-12 flex flex-col justify-center rounded-md`}
          >
            <div>
              <h3 className="text-3xl font-bold mb-8">Login Now 🚀</h3>
              {error && (
                <p className="bg-red-500 text-white p-4 mb-4">{error}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              {loginInputProps.map((input) => (
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
              className={`${classes.btnHover} outline-none mt-6 transition-all w-[140px] h-[45px] font-medium linearBg rounded-lg text-[17px]`}
            >
              {firebaseLoading ? "Loading" : "Login"}
            </button>
            <Link to="/auth/create-account" className="ml-auto mt-6 lg:mt-0">
              Don't have an account?
            </Link>
            <Link to="/" className="ml-auto block mt-4">
              Back Home
            </Link>
          </form>
        </div>
      </div>
      <AlertComponent />
    </section>
  );
};

export default LoginLayout;
