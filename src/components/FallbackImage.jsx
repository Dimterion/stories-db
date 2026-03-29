import { useState } from "react";
import fallbackImg from "../assets/images/fallback-img.jpg";

const DEFAULT_IMAGE = fallbackImg;

export default function FallbackImage({ src, alt, className }) {
  const [currentSrc, setCurrentSrc] = useState(src || DEFAULT_IMAGE);

  function handleError() {
    if (currentSrc !== DEFAULT_IMAGE) {
      setCurrentSrc(DEFAULT_IMAGE);
    }
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      className={className}
    />
  );
}
