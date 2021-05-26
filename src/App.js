import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./components/NotFound";
import Contact from "./Pages/Contact";
import WorkSamples from "./Pages/WorkSamples";
import Blog from "./Pages/Blog";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/worksamples" component={WorkSamples}></Route>
        <Route exact path="/blog" component={Blog}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
};

export default App;
