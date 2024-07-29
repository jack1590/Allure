import React, { useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Fashion from './components/Fashion';
import Gastronomy from './components/Gastronomy';
import Entertainment from './components/Entertainment';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      {showIntro ? (
        <Intro onFinish={handleIntroFinish} />
      ) : (
        <>
          <Header />
          <main>
            <About />
            <Fashion />
            <Gastronomy />
            <Entertainment />
            <Location />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
