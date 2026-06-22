import Background from "./components/Background.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
