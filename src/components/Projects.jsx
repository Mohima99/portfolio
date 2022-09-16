import MTphoto from "../assets/MathTech_1.PNG";
import newsPA from "../assets/NewsPA_1.PNG";
import vueLaravelCRUD from "../assets/VueLaravelCRUD.PNG";
import Magpie from "../assets/Magpie.png";
import Doctor from "../assets/Doctor.png";
import CraftreePic from "../assets/craftreepic.PNG";
import Nancy from "../assets/nancy.PNG";
import QuizBizz from "../assets/QuizBizz.PNG";
import GameV from "../assets/GameV.jpg";


import { Fade, Slide } from "react-reveal";


const Projects = () => {
    return (
        <div class="project" id="Projects">
            <div>
                <div class="project-title "> PROJECTS </div>
                {/* <h2 class="pro-subtitle">Here are some of my works</h2> */}
            </div>
            <Slide right duration={1500}>
                <div class="pos">
                    <div class="project-card">
                        <a href="https://szbjehan.github.io/mathtech/" target="_blank" rel="noopener noreferrer">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={MTphoto} alt="" />
                                <div class="box_title"> Techno Math (React)</div>
                                <div class="box_des" >
                                    Made with ReactJS
                            <br /> Responsive Website
                            </div>
                            </div>
                        </a>
                        <a href="https://mohima99.github.io/News_frontend_REACT/" target="_blank" rel="noopener noreferrer">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={newsPA} alt="" />
                                <div class="box_title"> News (React) </div>
                                <div class="box_des" > Made with ReactJS
                                <br /> Backend created with expressJS, NodeJS
                                <br /> Database MongoDB
                                <br /> Responsive Website
                                <br /> CRUD operation
                                </div>
                            </div>
                        </a>
                        <a href="https://www.nancymaesimpson.com/"  target="_blank" rel="noopener noreferrer">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Nancy} alt="" />
                                <div class="box_title"> Wix Website </div>
                                <div class="box_des" > Made with Wix website builder
                            <br /> A complete e-commerce website
                            <br /> Payment Integrated
                            <br /> Responsive Website
                            <br /> CRUD operation
                            </div>
                            </div>
                        </a>
                        <a href="https://szbjehan.github.io/demoProject/" target="_blank" rel="noopener noreferrer">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={GameV} alt="" />
                                <div class="box_title"> Gamers Vault </div>
                                <div class="box_des" > It was made for a client <br />
                                    An e-commerce website <br />
                                    work in progress <br />
                                    Responsive Website
                            </div>
                            </div>
                        </a>
                        {/* <div class="pro-box">
                            <img class="pro-box-pic" src={vueLaravelCRUD} alt="" />
                            <div class="box_title"> CRUD Laravel Vue Project </div>
                            <div class="box_des" > Made with Laravel and VueJS
                            <br /> Frontend using VueJS
                            <br /> Backend using Laravel, PHP
                            <br /> Responsive Website
                            <br /> CRUD operation
                            </div>
                        </div> */}

                    </div>
                    <div class="project-card">
                        <a href="https://magpieanalytics.com/" target="_blank" rel="noopener noreferrer">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Magpie} alt="" />
                                <div class="box_title"> Magpie Analytics </div>
                                <div class="box_des" > Made with Wordpress and Elemento
                                    <br /> Responsive Website
                                    <br /> Dynamic Website
                                    <br /> CRUD operation
                                    <br /> Client Project
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/Mohima99/Doctor-Appointment" target="_blank" rel="noopener noreferrer">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Doctor} alt="" />
                                <div class="box_title"> Doctor's Appointment </div>
                                <div class="box_des" > ReactJs
                                    <br /> Responsive Website
                                    <br /> Dynamic Website
                                    <br /> Client Project
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/Mohima99/Quiz-bizz"  target="_blank" rel="noopener noreferrer">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={QuizBizz} alt="QuizBizz Photo" />
                                <div class="box_title"> Quiz-bizz Mobile App (Kotlin)</div>
                                <div class="box_des" > KOTLIN Android App
                                    <br /> API integrated
                                </div>
                            </div>
                        </a>
                        <a href="https://mohima99.github.io/craftree/" target="_blank" rel="noopener noreferrer">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={CraftreePic} alt="" />
                                <div class="box_title"> CRAFTREE </div>
                                <div class="box_des" > It was made for a client <br />
                                    An e-commerce website <br />
                                    It has 7 pages <br />
                                    Responsive Website <br />
                                    A Group Project
                            </div>
                            </div>
                        </a>
                        <a href="https://github.com/Mohima99/Movie-upload-system" target="_blank" rel="noopener noreferrer">
                            <div class="pro-box">
                                <img class="pro-box-pic" src="" alt="" />
                                <div class="box_title"> Movie Photo Upload Project </div>
                                <div class="box_des" > University Project
                                <br /> Responsive Website
                                <br /> CRUD operation

                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </Slide>
        </div>
    );
}
export default Projects;
