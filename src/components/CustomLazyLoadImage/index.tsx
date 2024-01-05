import React, { ReactNode, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CustomLazyLoadImageProps } from "../../interface";

const CustomLazyLoadImage: React.FC<CustomLazyLoadImageProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div>
      <LazyLoadImage
        src={src}
        alt={alt}
        delayMethod="debounce"
        className={`transition-all`}
        placeholderSrc={src}
        style={{
          width: width || "auto",
          height: height || "auto",
        }}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default CustomLazyLoadImage;
