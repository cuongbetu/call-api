import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        {this.showContentMenu(routes)}
      </Router>
    );
  }

  showContentMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            component={route.main}
            exact={route.exact}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
