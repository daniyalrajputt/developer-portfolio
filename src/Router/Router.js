import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Home from '../container/Home/index'
import Navbar from "../components/Navbar/navbar";
import About from '../container/About/index'
import Work from '../container/Work/index'
import Contact from '../container/Contact/index'

export default function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <div>
                    <Route exact path="home" component={Home}></Route>
                    <Route path="about" component={About}></Route>
                    <Route path="work" component={Work}></Route>
                    <Route path="contact" component={Contact}></Route>
                </div>
            </Router>
        </div>
    );
}
