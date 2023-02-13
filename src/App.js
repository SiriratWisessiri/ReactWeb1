import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          {/* <Route path='/' exact component={Home}/> */}
          <Route exact path="/ReactWeb1" element={<Home />}/>
          <Route exact path="/ReactWeb1/services" element={<Services/>}/>
          <Route exact path="/ReactWeb1/products" element={<Products />}/>
          <Route exact path="/ReactWeb1/sign-up" element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
