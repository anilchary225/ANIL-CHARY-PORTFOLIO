import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import './DarkmodeToggle.css'

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className="darkmode-button" onClick={toggleDarkMode} style={{
        width: '155px',
        height: '50px',
      backgroundColor: darkMode ? "#fff" : "#622bc1",
      color: darkMode ? "#622bc1" : "#fff",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
    }}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}