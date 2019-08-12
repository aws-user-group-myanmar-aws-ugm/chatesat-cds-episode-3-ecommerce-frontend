import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import Details from "./Details";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/details/:slug" component={Details} />
    </Router>
  )
}

export default App;
