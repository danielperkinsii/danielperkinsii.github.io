import React from 'react';
import logo from './pictures/daniel.png';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Resume from './Resume.js'; 
import About from './About.js'; 
import Freelance from './Freelance';
// import './App.css';
import './assets/main.css'
import Nav from "./Nav";
import StaveCoffee from './StaveCoffee';
import DesignBoard from './DesignBoard';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full text-gray-700">
        <Nav />
        
        
        <Route exact path='/' component={Projects} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/about' component={About} />
        <Route exact path='/freelance' component={Freelance} />
        <Route exact path='/stavecoffee' component={StaveCoffee} />
        <Route exact path='/designboard' component={DesignBoard} />

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;