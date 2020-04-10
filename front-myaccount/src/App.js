import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import NavC from "./Components/NavCategory";
import Chat from "./Components/Chat";
import Footer from "./Components/Footer";
import "./desktop.css";

function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Route exact path="/" component={Home} />
        </Fragment>
      </Switch>
    </Router>
  );
}

const Home = () => (
  <div className="home">
    <Nav />
    <NavC />
    <Chat />

    <Footer />
  </div>
);
export default App;
