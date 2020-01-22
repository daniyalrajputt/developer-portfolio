import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Home from '../container/Home/index'
import Navbar from "../components/Navbar/navbar";
import About from '../container/About/index'

export default function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <div>
                    <Route exact path="home" component={Home}></Route>
                    <Route path="about" component={About}></Route>
                </div>
            </Router>
        </div>
    );
}
