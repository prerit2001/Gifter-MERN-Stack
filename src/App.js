import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "../src/Styled-Global";
import Below_Homepage from "./Pages/Below_Homepage/Below_Homepage";
import Homepage from "./Pages/HomePage/Homepage";
import Services from "./Pages/Services/Services";
import Signup from "./Pages/Sign-Up/Sign-up";
import { Profile } from "./Pages/Profile/Profile";

import { ExportingProfile } from "./Pages/OtherProfile/ExportingProfile";
import { Galery } from "./Pages/WishGalery/Galery";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  if (!localStorage.getItem("UserData")) {
    return (
      <Router>
        <GlobalStyle />

        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={Below_Homepage} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Homepage} />
          <Route path="/sign-up" exact component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" exact component={Below_Homepage} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Homepage} />
        <Route path="/sign-up" exact component={Signup} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/profile/:id" component={ExportingProfile} />
        <Route path="/createWish" exact component={Galery} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
