import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import notFound from "../../assets/img/notFound.avif";
const NotFoundLayout = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  });
  return (
    <section className="w-full mb-16 mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto items-center justify-center">
        <LazyLoadImage
          src={notFound}
          alt="not found"
          className="w-full max-w-96 object-cover"
        />
        <h3 className="text-3xl font-bold mt-4">Page Not Found!</h3>
      </div>
    </section>
  );
};

export default NotFoundLayout;
