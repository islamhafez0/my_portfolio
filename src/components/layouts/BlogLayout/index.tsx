import { useEffect } from "react";
import Markdown from "react-markdown";
import { markdownContent } from "../../../constants";
export const BlogLayout = () => {
  useEffect(() => {
    document.title = "Blog";
  }, []);
  return (
    <section className="w-full mb-16 mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <Markdown className="markdown">{markdownContent}</Markdown>
      </div>
    </section>
  );
};
