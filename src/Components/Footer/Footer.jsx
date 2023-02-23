import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <ScrollToTop smooth />
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://www.instagram.com/_devanshu___/" rel="noreferrer" target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Devanshu-Jethva/" rel="noreferrer" target="_blank">
            <Github color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/devanshu-jethva/" rel="noreferrer" target="_blank">
            <LinkedIn color="white" size={"3rem"} />
          </a>
        </div>
        <span className="copyright">Copyright &copy; {currentYear} &nbsp;
          devanshujethva3000@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;