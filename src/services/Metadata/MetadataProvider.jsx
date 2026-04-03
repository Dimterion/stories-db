import { useEffect, useState } from "react";
import { MetadataContext } from "./MetadataContext";

export const DEFAULT_TITLE = "Stories";
export const DEFAULT_DESCRIPTION =
  "A collection of stories written by Dimterion.";

export function MetadataProvider({ children }) {
  const [metadata, setMetadata] = useState({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  });

  useEffect(() => {
    document.title = metadata.title || DEFAULT_TITLE;

    let meta = document.getElementById("meta-description");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      meta.id = "meta-description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", metadata.description || DEFAULT_DESCRIPTION);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);
  }, [metadata]);

  return (
    <MetadataContext.Provider value={{ metadata, setMetadata }}>
      {children}
    </MetadataContext.Provider>
  );
}
