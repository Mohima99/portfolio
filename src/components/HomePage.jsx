import '../style/Design.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import NavBar from './NavBar';
import Recommendation from './Recommendation';
import Experience from './Experience';

const HomePage = () => {
    return (
        <div class="home">
            <NavBar />
            <Header />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Recommendation />
            {/* <Education /> */}
            <Contact />
        </div>
    );
}

export default HomePage;