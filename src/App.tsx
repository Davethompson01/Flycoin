import Hero from "./components/Hero";
import About from "./components/Home/About";
import Join from "./components/Home/Join";
import Tokenomics from "./components/Home/Tokenomics";
import Roadmap from "./components/Home/Roadmap";
import Sponsor from "./components/Sponsor";
import Faq from "./components/Home/Faq";
import Footer from "./components/Home/Footer";
import Nav from "./components/Nav"; // Import the Nav component
import { useState } from "react";
import FlyCoinGame from "./components/FlyCoinGame";

const App = () => {
  const [activeLink, setActiveLink] = useState<string>("Home");

  // Scroll to a section smoothly
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(section);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <div className="font-rubik-bubbles">
      <Nav
        activeLink={activeLink}
        setActiveLink={onUpdateActiveLink}
        scrollToSection={scrollToSection}
      />
      <div id="Home">
        <Hero />
      </div>
      <div>
        <Sponsor />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Community">
        <Tokenomics />
        <Join />
      </div>
      <div id="BuyToken">
        <Roadmap />
        <FlyCoinGame />

        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default App;
