import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          {/* <Route path='/' exact component={Home}/> */}
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
