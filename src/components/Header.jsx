import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'
import Typed from 'react-typed';
import Slider from "react-slick";
import Fade from "react-slick";

const Header = () => {
    return (
        <div class="headerr" id="Header">
            <ParticlesBg color="#220099" background-color="#000000" num={120} type="cobweb" />
            <div class="head-info">
                <div class="header-name"> Zarin Rahman Mohima</div>
                <h3>
                    <Typed
                        className="typed-text"
                        strings={["Web Developer", "Full Stack Developer", "Front-End Developer", "SQA Engineer"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop>
                    </Typed>
                </h3>
            </div>
            <div class="about-social">
                <a href="https://www.linkedin.com/in/zarin-rahman-mohima-99a93a205" class="fa fa-linkedin"></a>
                <a href="https://github.com/Mohima99" class="fa fa-github"></a>
                <a href="https://www.facebook.com/zarin.mohima.33/" class="fa fa-facebook"></a>
                <a href="https://www.instagram.com/_mohima___/" class="fa fa-instagram"></a>
            </div>
        </div>
    );
}
export default Header;