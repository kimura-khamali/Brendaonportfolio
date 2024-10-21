import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import PortfolioSummary from './Components/PortfolioSummary';
import Skills from './Components/Skills';
import './App.css'; // Import your CSS file here
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include the navbar component here */}
        <Navbar/>

        {/* <Routes>
          <Route path="/" element={
            <main className="content">
              <h1>BRENDA KHAMALI</h1>
              <h2>WEB DEVELOPER</h2>
              <div className="contact-info">
                <p>Email: <a href="mailto:kimurakhamali@gmail.com">kimurakhamali@gmail.com</a></p>
                <p>GITHUB: <a href="https://github.com/kimura-khamali" target="_blank" rel="noopener noreferrer">https://github.com/kimura-khamali</a></p>
              </div> */}
              {/* <Profile /> */}
              <PortfolioSummary/>
              <Skills />
              {/* <Experience />
              <Education /> */}
            {/* </main>
          } /> */}
          {/* <Route path='/home'element={<PortfolioSummary/>}/>
          {/* <Route path='/cv'element={</>}/> */}
          {/* <Route path="/projects" element={<h2>Projects Page (To be implemented)</h2>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>  */}
      </div>
    // </Router>
  );
}

export default App;














