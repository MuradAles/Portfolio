import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Element, scroller } from "react-scroll";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const scrollToMiddle = (element) => {
    scroller.scrollTo(element);
  };

  return (
    <>
      <div className="MainPage">
        <NavBar scrollTo={scrollToMiddle} />
        <Element name="home">
          <Home />
        </Element>
        <Element name="aboutMe">
          <AboutMe />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <footer className="footer py-4 bg-dark text-white-50">
        <div className="container text-center">
          <small>&copy; Murad Aleskerov</small>
        </div>
      </footer>
    </>
  );
};

export default App;
