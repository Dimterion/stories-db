import { useContext, useEffect } from "react";
import { MetadataContext } from "./Metadata/MetadataContext";
import {
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from "./Metadata/MetadataProvider";

export function useMetadata({ title, description }) {
  const context = useContext(MetadataContext);

  if (!context) {
    throw new Error(
      "useMetadata must be used within a MetadataContext.Provider",
    );
  }

  const { setMetadata } = context;

  useEffect(() => {
    setMetadata({ title, description });
    return () => {
      setMetadata({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION });
    };
  }, [title, description, setMetadata]);
}
