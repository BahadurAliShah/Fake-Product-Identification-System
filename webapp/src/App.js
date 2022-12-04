import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Admin from "./pages/Admin";
import './assets/main.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Admin/>}/>
            </Routes>
        </Router>
    );
}

export default App;
