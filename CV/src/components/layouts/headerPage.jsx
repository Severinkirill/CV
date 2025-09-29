import React from "react";
import {Link} from "react-router-dom";
function HeaderPage() {
    return (
        <header className={"fixed top-0 w-full bg-slate-300"}>
            <ul className={"text-black flex gap-10 justify-center list-none p-5 m-0 "}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/TODO">TODO</Link></li>
                <li><Link to="/swapi">SWAPI</Link></li>
            </ul>
        </header>
    );
}

export default HeaderPage;