import React from 'react';
import TitlePage from './components/sections/title';
import AboutMe from './components/sections/about-me';
import Skills from './components/sections/skills';
import Experience from './components/sections/experience';
import Education from './components/sections/education';
import Projects from './components/sections/projects';
import MouseTrackedGradient from './components/sections/components/mouse-tracked-gradient';
import Head from 'next/head';

const Home: React.FC = () => (
  <div>
    <TitlePage />
    <section id="about" className="h-96">
      <AboutMe />
    </section>
    <section id="skills" className="h-96">
      <Skills />
    </section>
    <section id="experience" className="h-screen">
      <Experience />
    </section>
    <section id="education" className="h-96">
      <Education />
    </section>
    <section id="projects" className="h-screen">
      <Projects />
    </section>
    <MouseTrackedGradient colorScheme='black' />
  </div>
);

export default Home;
