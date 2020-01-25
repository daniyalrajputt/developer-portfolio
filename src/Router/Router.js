import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../container/Home/index'
import Navbar from "../components/Navbar/navbar";
import About from '../container/About/index'
import Work from '../container/Work/index'
import Contact from '../container/Contact/index'

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/work">
                    <Work />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
