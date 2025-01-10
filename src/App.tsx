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
import { GlobalStyles } from "./components/shared/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeroSection />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />

      {/* global styling here*/}
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
