import masterWiZR from '../assets/mWiz.png';
import eHub from '../assets/ehub.jpg';
import pAlpha from '../assets/palogo.png';
import ROBU from '../assets/ROBU.png';
import BUCC from '../assets/BUCC.jpg';
import { Fade, Slide } from "react-reveal";

const Skills = () => {
    return (
        <div >

            <div class="skills" id="Skills">
                <div class="skills-title">Skills :</div>
                <Slide left duration={1500}>
                    <div>
                        <div class="s-box">
                            <div class="skills-box">
                                <h2 class="container skills-text bd-grid">Languages</h2>
                                <ul class="skills-text">
                                    <li>JAVA</li>
                                    <li>KOTLIN</li>
                                    <li>C, C++</li>
                                    <li>PHP</li>
                                    <li>Python</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>

                            <div class="skills-box">
                                <h2 class="container frontend skills-text">FrontEnd</h2>
                                <ul class="skills-text">
                                    <li>ReactJS</li>
                                    <li>VueJS</li>
                                    <li>HTML</li>
                                    <li>CSS, Bootstrap</li>
                                </ul>
                            </div>

                            <div class="skills-box">
                                <h2 class="container backend skills-text">BackEnd</h2>
                                <ul class="skills-text">
                                    <li>Laravel</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>NodeJS</li>
                                    <li>MySQL</li>
                                    <li>NoSQL</li>
                                </ul>
                            </div>

                            <div class="skills-box">
                                <h2 class="container backend skills-text">Others</h2>
                                <ul class="skills-text">

                                    <li>RESTful API</li>
                                    <li>WordPress</li>
                                    <li>Wix</li>
                                    <li>GIT, BitBucket</li>
                                    <li>Latex</li>
                                    <li>Microsoft Office</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>

            {/* <div class="experience">
                <div class="exp-title">Experience</div>
                <Fade bottom duration="1500">
                    <div>
                        <div class="exp-work">
                            <div class="work-section">
                                <a href="https://masterwizr.com/"> <img class="skill-pic" src={masterWiZR} alt="Master WiZR Photo" /> </a>
                                <div class="exp-des">       
                                    <a href="https://masterwizr.com/" class="work-link"> MASTER WiZR </a>
                                    <p class="exp-mw-info">Oslo - Norway</p>
                                    <p class="exp-mw-info">Software Quality Assurance Engineer</p>
                                    <p class="exp-mw-info">March, 2021 - Present</p>

                                </div>
                            </div>
                            <div class="work-section">
                                <a href="https://brac.net/"> <img class="skill-pic" src={masterWiZR} alt="BRAC Photo" /> </a>
                                <div class="exp-des">       
                                    <a href="https://brac.net/" class="work-link"> BRAC </a>
                                    <p class="exp-mw-info">Dhaka - Bangladesh</p>
                                    <p class="exp-mw-info">Product & Data Intern</p>
                                    <p class="exp-mw-info">Sept, 2022 - Present</p>

                                </div>
                            </div>
                            <div class="work-section">
                                <a href="https://pioneeralpha.com/"> <img class="skill-pic" src={pAlpha} alt="PA Photo" /> </a>
                                <div class="exp-des">
                                <a href="https://pioneeralpha.com/" class="work-link"> Pioneer Alpha </a>
                                    <p class="exp-mw-info">Dhaka - Bangladesh</p>
                                    <p class="exp-mw-info">Software Engineer Intern</p>
                                    <p class="exp-mw-info">March, 2021 - June, 2021</p>
                                </div>
                            </div>
                            <div class="work-section">
                                <a href="https://engineershubbd.com/"> <img class="skill-pic" src={eHub} alt="engineers Hub BD Photo" /> </a>
                                <div class="exp-des">
                                    <a href="https://engineershubbd.com/" class="work-link"> Engineers Hub BD </a>
                                    <p class="exp-mw-info">Campus Coordinator</p>
                                    <p class="exp-mw-info">March, 2021 - July, 2021</p>    
                                </div>
                            </div>


                        </div>

                    </div>
                </Fade>
            </div> */}

        </div >
    );
}
export default Skills;
                            