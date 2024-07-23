import { useEffect, useRef } from "react";
import classes from "./index.module.scss";
import { Link, useLocation } from "react-router-dom";
import { projects } from "./projects";
import { IoFlashOutline } from "react-icons/io5";
import { useInView, motion } from "framer-motion";
import ProjectCard from "../../common/ProjectCard";

export const ProjectsLayout = () => {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef);

  const location = useLocation();
  const isProjectsPage = location.pathname === "/pages/projects";
  if (isProjectsPage) {
    useEffect(() => {
      document.title = "Projects";
    }, []);
  }
  const displayedProjects = isProjectsPage ? projects : projects.slice(0, 3);
  return (
    <section
      ref={projectsRef}
      className={` w-full mb-16 mt-16 relative overflow-hidden z-10`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="pb-16 pt-16 px-4 md:px-8 py-4 flex flex-col max-w-2xl sm:px-5 lg:max-w-7xl mx-auto"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  place-items-center mt-16">
          {displayedProjects.map((project) => {
            return (
              <div
                className={`${classes.box} px-2.5 rounded-md overflow-hidden relative w-full max-w-[370px] transition hover:drop-shadow-[0_0_20px_#f3f4f612]`}
                key={project.slug}
              >
                <ProjectCard project={project} />
              </div>
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
      </motion.div>
    </section>
  );
};
