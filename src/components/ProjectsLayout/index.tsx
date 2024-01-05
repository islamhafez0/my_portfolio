import { useEffect, useState } from "react";
import classes from "./index.module.scss";
import { Link, useLocation } from "react-router-dom";
import { projects } from "./projects";
import { FiGithub } from "react-icons/fi";
import { IoFlashOutline } from "react-icons/io5";
import banner from "../../assets/img/banner-bg.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectsLayout = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const location = useLocation();
  const isProjectsPage = location.pathname === "/pages/projects";
  if (isProjectsPage) {
    useEffect(() => {
      document.title = "Projects";
    }, []);
  }
  const displayedProjects = isProjectsPage ? projects : projects.slice(0, 3);
  return (
    <section className={` w-full mb-16 mt-16 relative`}>
      <div
        className="pb-16 pt-16 px-4 md:px-8 py-4 flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <p className="text-gray-400 text-base">My Work</p>
          <h2 className="linearTitle text-2xl lg:text-5xl font-bold linearTitle mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-base">
            My Journey of Growth Through Projects
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-12 place-items-center mt-16">
          {displayedProjects.map((project) => {
            return (
              <Link
                className={`${classes.box} rounded-md overflow-hidden relative w-full max-w-[370px]`}
                to={`/pages/projects/${project.slug}`}
                key={project.slug}
              >
                <LazyLoadImage
                  src={project.images[0]}
                  alt={project.title}
                  className="h-[225px] w-full object-cover"
                  effect={imageLoaded ? undefined : "blur"}
                  placeholderSrc={project.images[0]}
                  onLoad={() => setImageLoaded(true)}
                  width="100%"
                  height="225px"
                />
                <div className="px-4 py-8">
                  <h3 className="text-2xl truncate linearTitle font-medium pb-2">
                    {project.title}
                  </h3>
                  <p className="truncate ">{project.description}</p>
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.github, "_blank");
                  }}
                  className="absolute border hover:bg-white hover:text-black hover:border-black transition-all top-4 right-4 bg-black w-10 h-10 grid place-content-center rounded-full z-10"
                >
                  <FiGithub size={24} />
                </div>
              </Link>
            );
          })}
        </div>
        {!isProjectsPage && (
          <div className="flex items-center justify-center mt-12">
            <Link
              to="/pages/projects"
              className={`btnPrimary flex gap-2 items-center px-10 py-3 bg-gray-200 text-black font-medium rounded-full`}
            >
              <IoFlashOutline size={24} />
              <p className="text-[18px]">view all</p>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsLayout;
