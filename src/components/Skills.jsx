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
                        <div class="skills-box-l bd-grid">
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

                        <div class="skills-box-f">
                            <h2 class="container frontend skills-text">FrontEnd</h2>
                            <ul class="skills-text">
                                <li>ReactJS</li>
                                <li>VueJS</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>

                        <div class="skills-box-b">
                            <h2 class="container backend skills-text">BackEnd</h2>
                            <ul class="skills-text">
                                <li>Laravel</li>
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>NodeJS</li>
                                <li>MySQL</li>
                            </ul>
                        </div>

                        <div class="skills-box-o">
                            <h2 class="container backend skills-text">Others</h2>
                            <ul class="skills-text">

                                <li>REST API</li>
                                <li>WordPress</li>
                                <li>Wix</li>
                                <li>Latex</li>
                                <li>Microsoft Office</li>

                            </ul>
                        </div>
                    </div>
                </Slide>
            </div>

            <div class="experience">
                <div class="exp-title">Experience</div>
                <Fade bottom duration="1500">
                    <div>
                        <div class="exp-work">
                            <br />
                            <a href="https://masterwizr.com/" class="work-link"> MASTER WiZR </a>
                            <p class="exp-mw-info">Oslo - Norway</p>
                            <p class="exp-mw-info">Software Beta Tester</p>
                            <p class="exp-mw-info">March, 2021 - Present</p>
                            <br />
                            <br />
                            <br />
                            <a href="https://pioneeralpha.com/" class="work-link"> Pioneer Alpha </a>
                            <p class="exp-mw-info">Dhaka - Bangladesh</p>
                            <p class="exp-mw-info">Software Engineer Intern</p>
                            <p class="exp-mw-info">March, 2021 - Present</p>
                            <br />
                            <br />
                            <br />

                            <a href="https://engineershubbd.com/" class="work-link"> Engineers Hub BD </a>
                            <p class="exp-mw-info">Campus Coordinator</p>
                            <p class="exp-mw-info">March, 2021 - Present</p>
                            <br />
                            <br />
                            <br />

                        </div>
                        <div>
                            <a href="https://masterwizr.com/"> <img class="work-pic-mw" src={masterWiZR} alt="Master WiZR Photo" /> </a>
                            <a href="https://pioneeralpha.com/"> <img class="work-pic-pa" src={pAlpha} alt="Pioneer Alpha Photo" /> </a>
                            <a href="https://engineershubbd.com/"> <img class="work-pic-eh" src={eHub} alt="Engineers Hub BD Photo" /> </a>

                        </div>
                    </div>
                </Fade>
            </div>

        </div >
    );
}
export default Skills;