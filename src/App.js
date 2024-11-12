import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import PortfolioSummary from './Components/PortfolioSummary';
import './App.css'; 
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
              <PortfolioSummary/>
      </div>
    // </Router>
  );
}

export default App;














