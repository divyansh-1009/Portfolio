import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import Blogs from './sections/Blogs';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Divyansh Yadav</title>
        <meta name="description" content="The personal portfolio of Divyansh Yadav, a software engineer and Computer Science undergraduate at IIT Jodhpur." />
        <meta property="og:title" content="Divyansh Yadav" />
        <meta property="og:description" content="The personal portfolio of Divyansh Yadav, a software engineer and Computer Science undergraduate at IIT Jodhpur." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experiences />
          <Projects />
          <Blogs />
          <Skills />
          <Contact />
        </main>

        <footer style={{ padding: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem', borderTop: '1px solid rgba(255, 239, 179, 0.1)' }}>
          <p>&copy; {new Date().getFullYear()} | Divyansh Yadav | All rights reserved.</p>
        </footer>
      </div>
    </HelmetProvider>
  );
}

