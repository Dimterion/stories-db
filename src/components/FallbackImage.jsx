import { useState } from "react";

const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKrSXTcgTTlQQEbghfQuAGYxgUQwReXvKvnGN-oHLcsLU_bc-mV0FCW36WvNw3O-IZ19kthn3PtZdo-wqWZq3KcmY496fi-bf1qIs3nJtTv_rKdF1rjgO2ZSN9H0NgyNTL-Pe4clafHm60gVN_wDlKAc6IpJrB2sGareHrBCS3i5zIhHNAtR6NcNIl6OdTolSTfT83FwF5AYePlc9RhpnS9n2S0lhlTjfZ6AeajowQ26dF5pc0q2OojCS__NTpUt3oD5ZoIorTIgY1";

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
