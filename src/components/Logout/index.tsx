import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <section className="w-full mb-16 mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <p className="text-3xl font-bold text-center">
          Logged out successfully
        </p>
        <div className="mt-8 flex items-center justify-center gap-6 font-medium text-xl">
          <Link
            to="/auth/login"
            className="hover:text-gray-400 transition-all underline pb-1"
          >
            Login Again?
          </Link>
          <Link
            to="/"
            className="hover:text-gray-400 transition-all underline pb-1"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Logout;
