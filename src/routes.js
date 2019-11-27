import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Ver from "./pages/ver";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/ver/:id" component={Ver} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
