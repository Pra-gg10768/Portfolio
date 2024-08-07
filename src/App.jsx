import React, { useRef } from 'react';
import { Contact, Experience, Hero, Portfolio } from './components';
import './App.css';

function App() {
  const experienceRef = useRef(null);

  return (
    <div>
      <Hero experienceRef={experienceRef} />
      <Experience ref={experienceRef} />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
