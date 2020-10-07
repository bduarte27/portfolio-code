import React from 'react';

import './components/stylesheet.css';

import Introduction from "./components/Introduction";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
        <Introduction />
        <Projects />
    </div>
  );
}

export default App;
