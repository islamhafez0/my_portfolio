import { useEffect } from "react";
import { blogContent } from "./blog";

const BlogLayout = () => {
  useEffect(() => {
    document.title = "Blog";
  }, []);
  return (
    <section className="w-full mb-16 mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <ul>
          {blogContent.map((post) => (
            <li key={post.id}>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                {post.title}
              </h3>
              <p className="mb-4 text-gray-400">{post.intro}</p>
              {post.content.map((p) => (
                <span key={p.title}>
                  <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-4">
                    {p.title}
                  </h2>
                  <p className="mb-4 text-gray-400">{p.info}</p>
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogLayout;
