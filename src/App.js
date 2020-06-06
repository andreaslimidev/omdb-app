import React, { useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import Detail from "./components/Detail";
import DisplayMovies from "./components/DisplayMovies";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Route path="/" exact component={DisplayMovies} />
          <Route path="/:id" component={Detail} />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
