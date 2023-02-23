import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy3.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";


const Intro = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I am</span>
          <span>Devanshu Jethva</span>
          <span>
            A Full Stack Developer having good amount of experience in NodeJs, ExpressJs, ReactJS, learning something new everyday.
          </span>
        </div>


        <div className="i-icons">
          <a rel="noreferrer" href="https://github.com/Devanshu-Jethva/" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/devanshu-jethva/" target="_blank">
            <img src={LinkedIn} alt="" />
          </a>
          <a rel="noreferrer" href="https://www.instagram.com/_devanshu___/" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img
          src={glassesimoji} alt="" />
        <div style={{ top: " -4%", left: "68%" }} className="floating-div">
          <FloatingDiv image={Crown} txt1="MERN" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }} className="floating-div">
          <FloatingDiv image={thumbup} txt1="NodeJs" txt2="ExpressJs" />
        </div>

        {/* Blur Divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-4rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
