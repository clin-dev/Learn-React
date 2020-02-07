import React from "react";
import Home from "./home";
import Aboutme from "./aboutme";
import Resume from "./resume";
import Contact from "./contact";
import Projects from "./projects";

import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/aboutme" component={Aboutme} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Main;
