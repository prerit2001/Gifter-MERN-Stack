import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../src/Styled-Global'
import { Navbar } from "./Components";


function App() {
  return (
    <Router>
     <GlobalStyle />
     <Navbar />
    </Router>  
  );
}

export default App;
