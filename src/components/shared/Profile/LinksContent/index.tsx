import { useState } from "react";
import { linkItemsDetails } from "../profile";
import { LazyLoadImage } from "react-lazy-load-image-component";
import resume from "/assets/resume.pdf";
type ImageLoadedState = {
  [key: string]: boolean;
};

const LinksContent = () => {
  const initialImageLoadedState: ImageLoadedState = linkItemsDetails.reduce(
    (acc, { alt }) => ({ ...acc, [alt]: false }),
    {}
  );

  const [imageLoaded, setImageLoaded] = useState(initialImageLoadedState);

  const handleImageLoad = (imageName: string) => {
    setImageLoaded((prev) => ({
      ...prev,
      [imageName]: true,
    }));
  };

  return (
    <>
      <ul className="flex flex-wrap gap-4 md:items-start">
        {linkItemsDetails.map(({ alt, image, link }) => (
          <li key={alt}>
            <a
              href={link}
              target="_blank"
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-700 hover:border-gray-200 transition-all"
            >
              <LazyLoadImage
                className={image.includes("/gmail") ? "w-10 h-10" : "w-12 h-12"}
                placeholderSrc={image}
                effect={imageLoaded[alt] ? undefined : "blur"}
                src={image}
                alt={alt}
                onLoad={() => handleImageLoad(alt)}
              />
            </a>
          </li>
        ))}
      </ul>
      <a
        href={resume}
        download="resume"
        className="flex w-[216px]  gap-2 items-center px-10 py-3 font-medium rounded-full btnPrimary mt-8"
      >
        Download Resume
      </a>
    </>
  );
};

export default LinksContent;
