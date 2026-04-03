import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { MetadataProvider } from "./services/Metadata/MetadataProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MetadataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MetadataProvider>
  </StrictMode>,
);
