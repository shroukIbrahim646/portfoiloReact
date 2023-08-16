import React from 'react';
import './styles/styles.css';
import About from './component/About';
import Skills from './component/skills';
import Services from './component/portflio';
import Footer from './component/footer';



function App() {
  return (
    <div className="App">
        <About />
      <Skills />
      <Services /> 
      <Footer />
    </div>
  );
}

export default App;
