// EntryPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import "./EntryPage.css";
import { Link } from "react-router-dom";
import VadlaAnilCharyLogo from "./Logo";

const EntryPage = () => {
  const [loading, setLoading] = useState(true);

  // const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s loading spinner
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="entry-page">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="entry-main-div d-flex flex-column justify-content-center align-items-center">
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <VadlaAnilCharyLogo />
          </div>

          <div className="lottie-background ">
            <DotLottieReact
              src="https://lottie.host/50a72edb-db2a-4f31-a6ff-75a7847ebc81/KRzfucwLjJ.lottie"
              loop
              autoplay
            />
          </div>

          <div className="content-overlay d-flex flex-column gap-2">
            <div>
              <p className="entry-head">
                “Every pixel has a purpose. Explore the mind behind the magic.”
                🚀
              </p>
            </div>
            <div className="entry-button d-flex justify-content-center align-items-center">
              <Link className="entrypage-link" to="/home">
                ⚡ Click here
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntryPage;
