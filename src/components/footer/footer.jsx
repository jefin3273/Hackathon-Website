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
        <div className="footer-section">
          <p className="hackathon-info">
            <strong>Hackathon 2024:</strong> Join us for a 5-day international hackathon showcasing innovative solutions and corporate-level projects. Team size: 2-5 members. Registration ends on <strong>19th December 2024, 11:59 PM</strong>.
            Prize Pool: <strong>₹2,00,000+</strong>. <a href="#register">Register now!</a>
          </p>
        </div>
        <div className="footer-section">
          <p className="contact-info">
            For inquiries, contact us at: <a href="mailto:your-email@example.com">your-email@example.com</a>
          </p>
        </div>
        <div className="footer-section">
          <p className="copyright">
            Copyrights
            <Copyright className="copyright-icon" />
            2024-2025 - {"All Rights Reserved."}
          </p>
          <p className="developed-by">
            Developed & Maintained by{" "}
            <span onClick={developedBy} className="developer-link">Triniteus</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default footer;
