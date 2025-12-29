import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sandeep Bhanage | Full-Stack Developer & CS Student</title>
        <meta name="description" content="Portfolio of Sandeep Bhanage - Final year Computer Science student passionate about building innovative web applications. Skills in React, Node.js, Python, and more." />
        <meta name="keywords" content="Sandeep Bhanage, Full Stack Developer, Computer Science, React, Node.js, Portfolio" />
        <meta property="og:title" content="Sandeep Bhanage | Full-Stack Developer" />
        <meta property="og:description" content="Final year CS student passionate about building innovative web applications." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sandeepbhanage.dev" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
