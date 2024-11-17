import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Languages } from './components/Languages';
import { Recommendations } from './components/Recommendations';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Recommendations />
        <Contact />
      </main>
      
      <footer className="bg-gray-900 py-6 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;