import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <div className='navBar'>
        <NavBar />
      </div>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div >
    </Router>

  );
}

export default App;