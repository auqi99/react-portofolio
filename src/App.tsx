// src/App.tsx
import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const App: React.FC = () => (
  <>
    <Navbar />
    <Jumbotron />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </>
);

export default App;
