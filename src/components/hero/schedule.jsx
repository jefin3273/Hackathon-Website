import "./schedule.css";
import React, { useEffect } from "react";

const schedule = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timelineAnimation");
          document
            .querySelectorAll(".container, .container-mobile")
            .forEach((container) =>
              container.classList.add("timelineAnimationContainer")
            );
        }
      });
    };

    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll("#timeline");
    divs.forEach((div) => observer.observe(div));
  });
  return (
    <React.Fragment>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule">
          <div className="schedule-title">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline" id="timeline">
            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  December
                  <div>
                    <div> 17</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Registration opens</h2>
              <p className="container-description">
                Registration is Now Open!<br />
                Calling all tech enthusiasts, developers, and innovators—our 5-day international hackathon awaits you! Embark on an exhilarating journey of coding, collaboration, and competition to tackle real-world challenges and craft corporate-level solutions. Secure your spot today!
              </p>
              <span className="circle"></span>
            </div>
            <div className="container">
              <h1 className="date">
                <div>
                  December
                  <div>
                    <div>21</div> <div>st</div>
                  </div>
                </div>
              </h1>
              <h2 className="container-title">Registration Closes</h2>
              <p className="container-description">
                Final Call for Registration!<br />
                Time is running out to join our international hackathon. Don't miss your chance to collaborate with global talent, tackle high-impact challenges, and compete for prizes worth over Rs. 2L. Register now before 21st December 2024, 11:59 PM, and secure your place in this transformative event.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container">
              <h2 className="container-title">Hackathon Begins</h2>
              <h1 className="date">
                <div>
                  December
                  <div>
                    <div>22</div> <div>nd</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                The wait is over! The challenge begins as we unveil the problem statements for this year’s hackathon. It's time to harness your creativity, showcase your skills, and start building innovative corporate-level solutions.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container">
              <h2 className="container-title">Hackathon is Live!</h2> <br />
              <h1 className="date">
                <div>
                  December
                  <div>
                    <div>22</div> <div>nd</div>
                  </div>
                  - December
                  <div>
                    <div>25</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                The countdown is over, and the challenge begins! 🎉💻
                The hackathon is officially live, and participants from around the globe are now diving into coding, brainstorming, and innovating. The competition is fierce as teams collaborate to tackle the problem statements and craft corporate-level solutions.
                Remember, every line of code counts, and every idea has the potential to redefine the future. Best of luck to all participants—may the best innovation win! 🚀
              </p>
              <span className="circle"></span>
            </div>
            <div className="container">
              <h2 className="container-title">Hackathon Ends and Submission Announcement</h2>
              <h1 className="date">
                <div>
                  December
                  <div>
                    <div>25</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                As the hackathon concludes, it’s time for teams to submit their work. Participants must upload their GitHub repository link and demo video for evaluation by our panel of judges. The event will culminate in an awards ceremony celebrating exceptional innovation, creativity, and teamwork.
              </p>
              <span className="circle"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule-mobile">
          <div className="schedule-title-mobile">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline-mobile" id="timeline">
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Registration opens</h2>
              <h2 className="date-mobile">
                <div>
                  December
                  <div>
                    <div>17</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Registration is Now Open!<br />
                Calling all tech enthusiasts, developers, and innovators—our 5-day international hackathon awaits you! Embark on an exhilarating journey of coding, collaboration, and competition to tackle real-world challenges and craft corporate-level solutions. Secure your spot today!
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile">
              <h2 className="container-title-mobile">Registration Closes</h2>
              <h1 className="date-mobile">
                <div>
                  December
                  <div>
                    <div>21</div> <div>st</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Final Call for Registration!<br />
                Time is running out to join our international hackathon. Don't miss your chance to collaborate with global talent, tackle high-impact challenges, and compete for prizes worth over Rs. 2L. Register now before 21st December 2024, 11:59 PM, and secure your place in this transformative event.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile">
              <h2 className="container-title-mobile">Hackathon Begins</h2>
              <h1 className="date-mobile">
                <div>
                  December
                  <div>
                    <div>22</div> <div>nd</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                The wait is over! The challenge begins as we unveil the problem statements for this year’s hackathon. It's time to harness your creativity, showcase your skills, and start building innovative corporate-level solutions.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile">
              <h2 className="container-title-mobile">Hackathon is Live!</h2> <br />
              <h1 className="date-mobile">
                <div>
                  December
                  <div>
                    <div>22</div> <div>nd</div><br />
                  </div>
                  - December
                  <div>
                    <div>25</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
              The countdown is over, and the challenge begins! 🎉💻
The hackathon is officially live, and participants from around the globe are now diving into coding, brainstorming, and innovating. The competition is fierce as teams collaborate to tackle the problem statements and craft corporate-level solutions.

Remember, every line of code counts, and every idea has the potential to redefine the future. Best of luck to all participants—may the best innovation win! 🚀
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Hackathon Ends and Submission Announcement</h2>
              <h1 className="date-mobile">
                <div>
                  December
                  <div>
                    <div>25</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
              As the hackathon concludes, it’s time for teams to submit their work. Participants must upload their GitHub repository link and demo video for evaluation by our panel of judges. The event will culminate in an awards ceremony celebrating exceptional innovation, creativity, and teamwork.
              </p>
              <span className="circle-mobile"></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;
