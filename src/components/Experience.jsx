import masterWiZR from '../assets/mWiz.png';
import BRAClogo from '../assets/brac-logo.png';
import eHub from '../assets/ehub.jpg';
import pAlpha from '../assets/palogo.png';
import ROBU from '../assets/ROBU.png';
import BUCC from '../assets/BUCC.jpg';
import { Fade, Slide } from "react-reveal";

const Experience = () => {
    return (
        <div >

            <div class="Experience" id="Experience">
               
            <div class="experience">
                <div class="exp-title">Experience</div>
                <Fade bottom duration="1500">
                    <div>
                        <div class="exp-work">
                            <div class="work-section">
                                <a href="https://masterwizr.com/" target="_blank" rel="noopener noreferrer"> <img class="skill-pic" src={masterWiZR} alt="Master WiZR Photo" /> </a>
                                <div class="exp-des">       
                                    <a href="https://masterwizr.com/" class="work-link"> MASTER WiZR </a>
                                    <p class="exp-mw-info">Oslo - Norway</p>
                                    <p class="exp-mw-info">Software Tester and QA</p>
                                    <p class="exp-mw-info">March, 2021 - Present</p>

                                </div>
                            </div>
                            <div class="work-section">
                                <a href="https://brac.net/" target="_blank" rel="noopener noreferrer"> <img class="skill-pic" src={BRAClogo} alt="BRAC Photo" /> </a>
                                <div class="exp-des">       
                                    <a href="https://brac.net/" class="work-link"> BRAC </a>
                                    <p class="exp-mw-info">Dhaka - Bangladesh</p>
                                    <p class="exp-mw-info">Product & Data Intern</p>
                                    <p class="exp-mw-info">Sept, 2022 - Present</p>

                                </div>
                            </div>
                            <div class="work-section">
                                <a href="https://pioneeralpha.com/" target="_blank" rel="noopener noreferrer"> <img class="skill-pic" src={pAlpha} alt="PA Photo" /> </a>
                                <div class="exp-des">
                                <a href="https://pioneeralpha.com/" class="work-link"> Pioneer Alpha </a>
                                    <p class="exp-mw-info">Dhaka - Bangladesh</p>
                                    <p class="exp-mw-info">Software Engineer Intern</p>
                                    <p class="exp-mw-info">March, 2021 - June, 2021</p>
                                </div>
                            </div>
                            <div class="work-section">
                                <a href="https://engineershubbd.com/" target="_blank" rel="noopener noreferrer"> <img class="skill-pic" src={eHub} alt="engineers Hub BD Photo" /> </a>
                                <div class="exp-des">
                                    <a href="https://engineershubbd.com/" class="work-link"> Engineers Hub BD </a>
                                    <p class="exp-mw-info">Campus Coordinator</p>
                                    <p class="exp-mw-info">March, 2021 - July, 2021</p>    
                                </div>
                            </div>


                        </div>

                    </div>
                </Fade>
                </div>
            </div>
        </div>
    );
}
export default Experience;
                            