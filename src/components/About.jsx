import Photo from '../assets/cvPhoto.jpg';
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
                        <p class="about-p">My area of interest is Database Designing, Coding and
                Robotics and I aspire to <br />
                gain more expertise in these
                fields. Working with Robotics Club of BRAC University  <br />
                has allowed me to improve my skills in these fields as
                well as helped me to develop <br />
                my leadership and management skills.
                </p>
                        <br />
                        <h2 class="about-h2">Contact Details</h2>
                        <p class="about-p">
                            Zarin Rahman Mohima
                    <br /> zarinrahmanmohima@gmail.com
                    <br /> +88 01733202988
                </p>
                        <a href={pdfCV} download="" class="pdf-download">
                            Download Resume
                    <i className="fa fa-download"></i> </a>
                    </div>
                </div>
            </Slide>
        </div>
    );
}
export default About;