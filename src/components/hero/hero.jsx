import "./hero.css";
import React, { useEffect, useState, useMemo } from "react";
import ReactGA from "react-ga";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import VanillaTilt from "vanilla-tilt";
import Agenda from "./agenda";
import Schedule from "./schedule";
import Faqs from "./faqs";
import { Footer } from "../";
import { ReactComponent as Calender } from "../../assets/calender.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as ArrowRightWhite } from "../../assets/arrow-right-white.svg";
import { ReactComponent as ArrowRightBlack } from "../../assets/arrow-right-black.svg";

const hero = () => {
  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("../events", "_self");
  };
  const handleCardClicks = (card) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `${card}`,
    });
    window.open(`${card}`, "_self");
  };
  const [countdown, setCountdown] = useState({
    days: 12,
    hours: 15,
    minutes: 45,
    seconds: 30,
  });
  const handleCountdown = () => {
    const countDate = new Date("September 8, 2023 10:00:00").getTime();
    const now = new Date().getTime();
    const diff = countDate - now;
    {
      if (now > countDate) return;
    }
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    var textDay = Math.floor(diff / day);
    var textHour = Math.floor((diff % day) / hour);
    var textMinute = Math.floor((diff % hour) / minute);
    var textSecond = Math.floor((diff % minute) / second);

    if (textDay.toString().length == 1) {
      textDay = `0${textDay}`;
    }
    if (textHour.toString().length == 1) {
      textHour = `0${textHour}`;
    }
    if (textMinute.toString().length == 1) {
      textMinute = `0${textMinute}`;
    }
    if (textSecond.toString().length == 1) {
      textSecond = `0${textSecond}`;
    }

    setCountdown({
      days: textDay,
      hours: textHour,
      minutes: textMinute,
      seconds: textSecond,
    });
  };

  useEffect(() => {
    const tilt = VanillaTilt.init(
      document.querySelectorAll(".anim"),
      {
        max: 10,
        speed: 400,
      },
      []
    );
    const interval = setInterval(() => handleCountdown(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <React.Fragment>
      <div className="parent_hero">
        {/* <div className="progress_bar"></div> */}
        <div className=" tag-hero-mobile">

        </div>

        {/* ----------------------- Page 1 ------------------------- */}
        <section className="column">
          <div className="left_side">
            <div className="curve"></div>

            <div className="title1">
              <span className="hackathon"> {"Hack - A - Ton"}</span>
              <br />
              {/* <p className="tag1"> A National Level 24 Hour Hackathon</p> */}
              {/* <span className="hackathon">Hackathon</span> */}
              <p className="description">
              Join us for an <span> International-Level 5-D Hackathon </span>
              celebrating cutting-edge 
                <br /> innovation and tech brilliance from across the globe.This corporate-level hackathon challenges
                <br/>participants to create robust, real-world solutions that redefine industry standards.
              </p>
            </div>

            <div className="register_now" onClick={handleRegisterClick}>
              <div>
                <a>REGISTER NOW </a>
              </div>
              <div>
                {" "}
                <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 35 }} />
              </div>
            </div>
            <div className="countdown-main">
              {/* <h2 className="countdown-text">
            Join us for the ultimate coding extravaganza!
          </h2> */}
              <div className="countdown anim">
                <div className="day-card anim">
                  <h3 className="day">{countdown.days}</h3>
                  <h3>Days</h3>
                </div>
                <div className="sep">:</div>
                <div className="hour-card anim">
                  <h3 className="hours">{countdown.hours}</h3>
                  <h3>Hours</h3>
                </div>
                <div className="sep">:</div>
                <div className="min-card anim">
                  <h3 className="minutes">{countdown.minutes}</h3>
                  <h3>Minutes</h3>
                </div>
                <div className="sep">:</div>
                <div className="sec-card anim">
                  <h3 className="seconds">{countdown.seconds}</h3>
                  <h3>Seconds</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="right_side">
            {/* -------------------------- Column 1 * ---------------------------------- */}

            <div className="col1 animated-div">
              <h3 className="text">
                <div>
                  <div>
                    <div> 26</div> <div> th</div>{" "}
                  </div>{" "}
                  December
                </div>
                <Calender className="calender-icon" />
              </h3>
              <p
                className="text2"
                onClick={() => handleCardClicks("/guidelines")}
              >
                Guidelines <ArrowRightWhite className="arrow-right-icon" />
              </p>
              <p className="text3" onClick={() => handleCardClicks("/events")}>
                Events <ArrowRightWhite className="arrow-right-icon" />
              </p>
            </div>
            {/* -------------------------- Column 2 * ---------------------------------- */}
            <div className="col2 animated-div">
              <h3 className="text4">
                Information Details <Info className="info-icon" />
              </h3>
              <p className="text5" onClick={() => handleCardClicks("/about")}>
                About
                <ArrowRightWhite className="arrow-right-icon" />
              </p>
              {/* <p className="text6" onClick={() => handleCardClicks("/judges")}>
                Judge Panel
                <ArrowRightWhite className="arrow-right-icon" />
              </p> */}
            </div>
            {/* -------------------------- Column 3 * ---------------------------------- */}
            <div className="col3 animated-div">
              <div className="flex justify-items-start">
                <h3 className="text7">Problem Statements</h3>
                </div>
              <p className="text8">
                Problem statements will be sent on Telegram channel after registration.
              </p>
            </div>

            {/* -------------------------- Column 4  ---------------------------------- */}
            <div
              className="col4 animated-div"
              // onClick={() =>
              //   window.open("https://goo.gl/maps/iaE4Kko8wqqHs4jx9")
              // }
            >
              <h3 className="text10">
                Venue <Location className="location-icon" />
              </h3>
              <div className="flex flex-col ">
                <p className="text-white pt-[2vh] text-[1vw] venue-text-mobile">
                  ONLINE
                </p>
                {/* <p className="text-white  text-[0.8vw] ">
                  National Highway 45, Potheri, SRM Nagar, KatTonulathur, Tamil
                  Nadu - 603203
                </p> */}
                <div className="round"></div>
              </div>
            </div>
            {/* -------------------------- Column 5  ---------------------------------- */}
            <div className="col5 "></div>
            {/* -------------------------- Column 6  ---------------------------------- */}
            <div className="col6 animated-div">
              <h3 className="text13">
                Organized By
                <div className="flex justify-center items-center gap-1"></div>
              </h3>
              <div className="flex items-start justify-between flex-col">
                <p className="text14">TRINITE US - WE MAKE YOU GROW</p>
                <div className="round2"></div>
              </div>
            </div>
          </div>
        </section>
        {/* -------------------------- Page 2 -------------------------- */}
      </div>
      <Agenda />
      <div className="bg-sep"></div>
      <Schedule />
      <div className="bg-sep"></div>
      <Faqs/>
      <div className="bg-sep"></div>
      <Footer />
    </React.Fragment>
  );
};

export default hero;
