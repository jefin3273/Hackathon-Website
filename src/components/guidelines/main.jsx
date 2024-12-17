import React, { useEffect, useRef } from "react";
import "./guidelines.css";
import ReactGA from "react-ga";

const Guidelines = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    document.title = "Hack-A-Thon Guidelines";

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

    const handleClick = () => {
      ReactGA.event({
        category: "Button",
        action: "click",
        label: "register",
      });
      window.open("../Terms_Conditions", "_self");
    };

  return (
    <div className="parent-guidelines">
      <h1 className="guidelines-title">Hack-A-Thon Guidelines</h1>
      <div className="guidelines-container">
        <div className="guidelines-content">

          <section className="guidelines-section" ref={addToRefs}>
            <h2>Prizes and Recognition**</h2>
            <ul>
              <li>Total Prize Pool: ₹1,00,000+</li>
              <li>1st Prize: ₹75,000</li>
              <li>2nd Prize: ₹50,000</li>
              <li>3rd Prize: ₹25,000</li>
              <li>Additional rewards include certificates and internship opportunities as well.</li>
            </ul>
          </section>

          <section className="guidelines-section" ref={addToRefs}>
            <h2>General Guidelines</h2>
            <ul>
              <li>Teams must have 2-5 members, registering under a single group name.</li>
              <li>Open to tech enthusiasts, students, and professionals globally.</li>
              <li>Registration fee: ₹300 per team (non-refundable).</li>
              <li>Registration deadline: 21st December 2024, 11:59 PM IST.</li>
              <li>Join the provided Telegram group for official updates.</li>
            </ul>
          </section>

          <section className="guidelines-section" ref={addToRefs}>
            <h2>Hackathon Rules</h2>
            <ul>
              <li>Problem statements revealed on 22nd December 2024, 12:00 AM IST.</li>
              <li>Development: 22nd December 2024 (12:00 AM) to 25th December 2024 (8:00 PM) IST.</li>
              <li>Submit via GitHub repository and a detailed explanation video.</li>
              <li>All work must be original and created during the hackathon.</li>
              <li>Use any programming language, frameworks, or tools.</li>
            </ul>
          </section>

          <section className="guidelines-section" ref={addToRefs}>
            <h2>Judging Criteria</h2>
            <ul>
              <li>Innovation and Creativity: Originality and creative problem-solving.</li>
              <li>Technical Implementation: Code quality and efficient use of technologies.</li>
              <li>Scalability and Impact: Potential for real-world application.</li>
              <li>Presentation: Clarity and effectiveness of project explanation.</li>
            </ul>
          </section>

          <section className="guidelines-section" ref={addToRefs}>
            <h2>Code of Conduct</h2>
            <ul>
              <li>Respect and collaborate with teammates and fellow participants.</li>
              <li>Maintain high ethical standards; no cheating or misconduct.</li>
              <li>Reach out to the organizing committee for any issues.</li>
              <li>Violation of guidelines will result in disqualification.</li>
            </ul>
          </section>

          <section className="guidelines-section" ref={addToRefs}>
            <h2>Important Dates</h2>
            <ul>
              <li>Registration Deadline: 21st December 2024, 11:59 PM IST</li>
              <li>Problem Statement Reveal: 22nd December 2024, 12:00 AM IST</li>
              <li>Submission Deadline: 25th December 2024, 8:00 PM IST</li>
              <li>Results and Award Ceremony: To be announced</li>
            </ul>
          </section>
        </div>
        </div>
<div className="guidelines-footer-container">
  <a onClick={handleClick}>
  <h1 className="Terms-and-Conditions">**Terms and Conditions</h1>
  </a>
</div>
</div>
  );
};

export default Guidelines;
