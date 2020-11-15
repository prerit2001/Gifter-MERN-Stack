import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../src/Styled-Global'
import { Navbar } from "./Components";
import Homepage from './Pages/HomePage/Homepage';


function App() {
  return (
    <Router>
     
     <GlobalStyle />
     
     <Navbar />

     <Switch>
       <Route path="/" exact component={Homepage}/>
     </Switch>

    </Router>  
  );
}

export default App;
