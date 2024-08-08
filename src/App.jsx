import { useState } from 'react';
import { Contact, Experience, Hero, Portfolio, About } from "./components";
import './App.css';

function App() {
  return (
    <>
      <div>
          <Hero />
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="portfolio"><Portfolio /></section>
          <section id="contact"><Contact /></section>
      </div>
    </>
  );
}

export default App;
