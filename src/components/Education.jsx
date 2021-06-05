import BRACUlogo from '../assets/bracu_logo.png';
import ViqiLogo from '../assets/viqilogo.jpg';
import { Fade, Slide } from "react-reveal";


const Education = () => {
    return (
        <div class="education" id="Education">
            <div class="edu">Education</div>
            <Fade bottom duration="1500">
                <div>

                    <div class="edu-work">
                        <br />
                        <a href="https://www.bracu.ac.bd/" class="edu-link"> BRAC University </a>
                        <p class="edu-mw-info">Bachelor of Science in Computer Science and Engineering</p>
                        <p class="edu-mw-info">8th Semester ongoing with CGPA <span class="number"> 3.85</span></p>
                        <p class="edu-mw-info">January, 2019 - present</p>
                        <br />
                        <br />
                        <br />
                        <a href="https://www.vnsc.edu.bd/" class="edu-link"> Viqarunnisa Noon School & College </a>
                        <p class="edu-mw-info">Higher Secondary School Certificate</p>
                        <p class="edu-mw-info">GPA-5 (2016 - 2018)</p>
                        <br />
                        <br />
                        <br />
                        <a href="https://www.vnsc.edu.bd/" class="edu-link"> Viqarunnisa Noon School & College </a>
                        <p class="edu-mw-info">Secondary School Certificate</p>
                        <p class="edu-mw-info">GPA-5 with Talent Pool Scholarship (2006 - 2016)</p>

                    </div>
                    <div>
                        <a href="https://www.bracu.ac.bd/"><img class="edu-pic-bracu" src={BRACUlogo} alt="BRACU Photo" /> </a>
                        <a href="https://www.vnsc.edu.bd/"><img href="https://www.vnsc.edu.bd/" class="edu-pic-viqi" src={ViqiLogo} alt="Viqi Photo" /> </a>
                        <a href="https://www.vnsc.edu.bd/"><img class="edu-pic-viqi-2" src={ViqiLogo} alt="Viqi Photo" /> </a>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
export default Education;