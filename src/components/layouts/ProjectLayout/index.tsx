import { useParams } from "react-router-dom";
import { projects } from "../ProjectsLayout/projects";
import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
export const ProjectLayout = () => {
  const [imageLoaded, setImageLoaded] = useState({
    mainImage: false,
    subImage: false,
  });
  const handleImageLoaded = (imageName: string) => {
    setImageLoaded((prev) => ({
      ...prev,
      [imageName]: true,
    }));
  };

  const { slug } = useParams();
  useEffect(() => {
    document.title = `Projects/${slug}`;
  }, []);

  const project = projects.find((p) => p.slug === slug);
  const [image, setImage] = useState(project?.images[0]);
  if (!project) {
    return <div>Project not found</div>;
  }
  const handleImage = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    setImage(target.src);
  };
  const mainImageStyle = {
    height: imageLoaded.mainImage ? "100%" : "300px",
  };
  return (
    <section className="w-full mb-16 mt-16 px-4 md:px-8 py-4">
      <div className="flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-around gap-8 lg:gap-18">
          <div className="flex flex-col flex-1 w-full lg:w-2/5 h-full overflow-hidden">
            <LazyLoadImage
              className={`w-full h-full mb-8 object-cover rounded-sm`}
              src={image}
              alt={project.title}
              placeholderSrc={image}
              effect={imageLoaded.mainImage ? undefined : "blur"}
              onLoad={() => handleImageLoaded("mainImage")}
              style={mainImageStyle}
            />
            <div className="flex justify-center gap-4 flex-wrap">
              {project.images.length > 1 &&
                project.images.map((img, ix) => (
                  <LazyLoadImage
                    key={ix}
                    className={`transition-all w-28 lg:w-32 rounded-sm object-cover cursor-pointer`}
                    src={img}
                    alt={project.title}
                    placeholderSrc={img}
                    effect={imageLoaded.subImage ? undefined : "blur"}
                    onLoad={() => handleImageLoaded("subImage")}
                    onClick={handleImage}
                    style={{ height: "100%" }}
                  />
                ))}
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-2/5">
            <div>
              <span className="text-base text-gray-500">Web</span>
              <h3 className="linearColor text-2xl md:text-4xl font-bold mb-6">
                {project.title}
              </h3>
              <div className="flex items-center gap-4 mb-8">
                <a
                  className="btnPrimary flex justify-center items-center w-12 h-12 rounded-full bg-gray-200 text-black font-medium"
                  href={project.github}
                  target="_blank"
                >
                  <FiGithub size={24} />
                </a>
                {project.demo && (
                  <a
                    className="btnSecondry w-12 h-12 rounded-full border flex items-center justify-center"
                    href={project.demo}
                    target="_blank"
                  >
                    <IoMdOpen size={24} />
                  </a>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              {project.technologies.map((tech) => (
                <div key={tech} className="linearBg py-1 px-4">
                  <p className="text-base font-medium">{tech}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-gray-500 mt-5">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
