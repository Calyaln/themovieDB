import React from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MoviesList} />
      </Switch>
    </div>
  );
}

export default App;
