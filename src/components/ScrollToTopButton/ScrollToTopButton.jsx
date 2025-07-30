// src/components/ScrollToTopButton.jsx
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > window.innerHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 9999,
          background: "#facc15",
          color: "#000",
          padding: "12px 16px",
          borderRadius: "9999px",
          border: "none",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          fontSize: "20px",
        }}
        title="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
}

export default ScrollToTopButton;