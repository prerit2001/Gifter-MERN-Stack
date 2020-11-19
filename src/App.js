import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../src/Styled-Global'
import { Navbar } from "./Components";
import Below_Homepage from './Pages/Below_Homepage/Below_Homepage';
import Homepage from './Pages/HomePage/Homepage';
import Services from './Pages/Services/Services';
import Signup from './Pages/Sign-Up/Sign-up'


function App() {

  return (
    

    <Router>
     
     <GlobalStyle />

     

     <Navbar />
     
     <Switch>

       <Route path="/" exact component={Homepage}/>
       <Route path="/about" exact component={Below_Homepage}/>
       <Route path="/services" exact component={Services}/>
       <Route path="/products" exact component={Homepage}/>
       <Route path="/sign-up" exact component={Signup}/>

     </Switch>
     
    </Router>
    
  
  );
}

export default App;
