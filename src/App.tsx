import {
  AboutMe,
  ContactMe,
  Experience,
  Footer,
  HeroSection,
  Projects,
  Skills,
} from "./components/containers";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/shared/Theme";

import { GoHome } from "./components/shared/ui";
import { useEffect, useState } from "react";
import { GlobalStyled } from "./Global";

function App() {
  const [showHome, setShowHome] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 600) {
        setShowHome(true);
      } else {
        setShowHome(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {showHome && <GoHome />}
      <HeroSection />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />

      {/* global styling here*/}
      <GlobalStyled />
    </ThemeProvider>
  );
}

export default App;
