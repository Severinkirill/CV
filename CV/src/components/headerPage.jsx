import React from "react";

function HeaderPage() {
    return (
        <header className={"fixed top-0 w-full bg-slate-300"}>
            <ul className={"text-black flex gap-10 justify-center list-none p-5 m-0 "}>
                <li><a>HOME</a></li>
                <li><a>TODO</a></li>
                <li><a>SWAPI</a></li>
            </ul>
        </header>
    );
}

export default HeaderPage;