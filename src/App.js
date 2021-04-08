import React from "react";
import { BrowserRouter , Route } from 'react-router-dom';
import Home from "./components/Home";
import JournosMain from "./components/journos/JournosMain";
import AllOut from "./components/all-out/AllOut";
import { hot } from "react-hot-loader";
import "./App.css";

const App = () => {
    return(
        <BrowserRouter basename="/">
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/journos"} component={JournosMain} />
            <Route exact path={"/all-out"} component={AllOut} />
        </BrowserRouter>
    )
}

export default hot(module)(App);