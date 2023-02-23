import React from 'react'
import './Project.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import taskapi from "../../img/taskapi.jpg"
import Ecommerce from "../../img/ecommersapi.jpg";
import shopui from "../../img/shopUI.jpg"
import blogsite from "../../img/blogsite.png"
import 'swiper/css';
import { useContext } from "react";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio">
      {/* Heading  */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>


      {/* Slider  */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <a target='_blank' rel="noreferrer" href='https://github.com/Devanshu-Jethva/Task-Manage-API'>
            <img src={taskapi} alt="" />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a target='_blank' rel="noreferrer" href='https://github.com/Devanshu-Jethva/E-commerceAPI'>
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a target='_blank' rel="noreferrer" href='https://github.com/Devanshu-Jethva/BlogSite'>
            <img src={blogsite} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a target='_blank' rel="noreferrer" href='https://github.com/Devanshu-Jethva/E-commerseUI'>
            <img src={shopui} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio