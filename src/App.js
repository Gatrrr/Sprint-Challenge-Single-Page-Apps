import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';


function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Route exact path="/characters" component={CharacterList} />
      <Route path="/" components={WelcomePage} />
    </main>
  );
}

export default App; 
