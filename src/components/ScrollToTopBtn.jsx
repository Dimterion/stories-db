import { useState, useEffect } from "react";
import { ArrowUpIcon } from "./Icons";

export default function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <button
      className="scroll-to-top-btn"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon />
    </button>
  );
}
