import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import FormBuilder from "./views/FormBuilder";

const Routing = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Route path="/" exact component={FormBuilder} />
      </Router>
    </div>
  );
};

export default Routing;
