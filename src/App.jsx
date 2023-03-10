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
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <Navbar />
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        <LanguageToggler />
        <About />
        <div className="contents-container">
          <Skills />
          <Interests />
          <CV />
          <Contact />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
