import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import HeaderPage from "./components/layouts/headerPage.jsx";
import HomePage from "./components/layouts/homePage.jsx";
import FooterPage from "./components/layouts/footerPage.jsx";

import TODOApp from "./components/home_works/TODO/TODOApp.jsx";
import SwapiApp from "./components/home_works/Swapi/SwapiApp.jsx";




function App() {
    return (
        <Router>
            <HeaderPage />
            <nav>
                <Link to="/" className="text-2xl text-amber-300">CV</Link>
                <Link to="/todo" className="text-2xl text-amber-300">TODO</Link>
                <Link to="/swapi" className="text-2xl text-amber-300">Swapi</Link>
            </nav>
            <main className="container mx-auto p-4 min-h-[80vh]">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/todo" element={<TODOApp />} />
                    <Route path="/swapi" element={<SwapiApp />} />
                </Routes>
            </main>

            <FooterPage />
        </Router>
    );
}

export default App;
