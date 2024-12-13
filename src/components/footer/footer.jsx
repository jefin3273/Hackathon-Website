import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
const footer = () => {
  const developedBy = () => {
    window.open("https://triniteus.com/", "_blank");
  };
  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          Copyrights
          <Copyright className="copyright-icon" />
          2024-2025 - {"All Rights Reserved."}
        </p>
        <p className="copyright">
          Developed & Maintained by <p onClick={developedBy}>triniteus</p>
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
