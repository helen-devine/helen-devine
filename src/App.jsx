import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ThemeToggler from "./components/ThemeToggler";
import LanguageToggler from "./components/LanguageToggler";
import About from "./components/About";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import CV from "./components/CV";
import Footer from "./components/Footer";

export const ThemeContext = createContext(null);

function App() {
  //language toggler

  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "nl" : "en"));
  };

  //dark and light mode toggler
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <Navbar language={language} />
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        <LanguageToggler language={language} toggleLanguage={toggleLanguage} />
        <About language={language} />
        <div className="contents-container">
          <Skills />
          <Interests language={language} />
          <CV language={language} />
          <Contact />
        </div>
        <Footer language={language} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
