import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Work from './components/Work';

export default function Home() {
  return (
    <main>
      <Hero />
      <Skill />
      <Work />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
