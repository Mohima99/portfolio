import Photo from '../assets/cvPhoto.jpeg';
import pdfResume from '../assets/Resume_ZarinRahmanMohima.pdf';
import pdfCV from '../assets/CV_ZarinRahmanMohima.pdf';

import { Fade, Slide } from "react-reveal";

const About = () => {
    return (
        <div class="aboutme" id="About">
            <Fade duration={1000}>
                <div>
                    <img class="about-pic" src={Photo} alt="Profile Photo" />

                </div>
            </Fade>
            <Slide left duration={1000}>
                <div>
                    <div class="about-des">
                        <h2 class="about-h2">About Me</h2>
                        <p class="about-p">
                        I am a driven individual with quick learning abilities and analytical skills. Having hands-on experience in the field of 
                    <br />    designing, planning and maintenance of software programs, I want to contribute my work experience, skills,
                    <br /> leadership qualities and knowledge to a diverse team that is progressive and dynamic where my skills will be 
                    <br /> utilized in the maximum way possible.
                        </p>
                        <br />
                        <h2 class="about-h2">Contact Details</h2>
                        <p class="about-p">
                            Zarin Rahman Mohima
                        <br /> zarinrahmanmohima@gmail.com
                        {/* <br /> +88 01733202988 */}
                        </p>
                        <a href={pdfResume} download="" class="pdf-download">
                            Download Resume
                            <i className="fa fa-download"></i> </a>
                        <a href={pdfCV} download="" class="pdf-download">
                            Download Single page CV
                            <i className="fa fa-download"></i> </a>
                    </div>
                </div>
            </Slide>
        </div>
    );
}
export default About;