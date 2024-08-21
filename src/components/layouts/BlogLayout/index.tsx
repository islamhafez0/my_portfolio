import { useEffect } from "react";
export const BlogLayout = () => {
  useEffect(() => {
    document.title = "Blog";
  }, []);
  return (
    <section className="w-full mb-16 mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <p className="text-center">Comming Soon....</p>
      </div>
    </section>
  );
};
