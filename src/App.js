import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/App.css';
import NavBar from "./components/UI/NavBar/NavBar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <Router>
            <NavBar/>
            <AppRouter/>
        </Router>);
}

export default App;
