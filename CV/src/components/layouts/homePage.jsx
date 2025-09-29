import React from "react";
 import my_Photo from "../img/my_photo.jpg"
function HomePage() {
    return (
        <div className="flex flex-col mt-20 mb-20">
            <h1 className="text-4xl font-medium font-mono text-emerald-400 text-center">Kirill Severin</h1>
            <img  className="w-40 h-40 " src={my_Photo} alt={my_Photo}/>
            <p className="text-3xl font-mono mt-4">Frontend Developer</p>
            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

    );
}

export default HomePage;