import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import configureStore from "../store/configureStore";
import App from "./App";

import LandingPageContainer from "./LandingPageContainer";
import CreateFormPage from "./CreateFormPage";

export default class Root extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <App>
            <Switch>
              <Route path="/create" component={CreateFormPage} />
              <Route path="/" component={LandingPageContainer} />
            </Switch>
          </App>
        </BrowserRouter>
      </Provider>
    );
  }
}
