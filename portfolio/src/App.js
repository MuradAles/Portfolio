import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Element, scroller } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const scrollToMiddle = (element) => {
    scroller.scrollTo(element);
  };

  return (
    <>
      <NavBar scrollTo={scrollToMiddle} />
      <div className='MainPage'>
        <Element name="home">
          <div className='MainComponent'>
            <Home />
          </div>
        </Element>
        <Element name="aboutMe">
          <div className='MainComponent aboutMe'>
            <AboutMe />
          </div>
        </Element>
        <Element name="projects">
          <div className='MainComponent'>
            <Projects />
          </div>
        </Element>
        <Element name="contact">
          <div className='MainComponent last'>
            <Contact />
          </div>
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
