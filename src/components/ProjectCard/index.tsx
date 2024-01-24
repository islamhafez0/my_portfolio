import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ProjectTypes } from "../../interface";
const ProjectCard = ({ project }: { project: ProjectTypes }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Link to={`/pages/projects/${project.slug}`}>
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
};

export default ProjectCard;
