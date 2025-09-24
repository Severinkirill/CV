import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function FooterPage() {
    return (
        <footer className={"fixed bottom-0 w-full bg-slate-300"}>
            <ul className="flex gap-10 justify-center list-none p-5 m-0">
                <li className="flex gap-10">
                    <a href={"https://www.instagram.com/severinkiril09/"} aria-label="Instagram">
                        <FaInstagram size={30} />
                    </a>
                    <a href={"https://www.linkedin.com/feed/"} aria-label="LinkedIn">
                        <FaLinkedin size={30} />
                    </a>
                    <a href={"https://github.com/Severinkirill"} aria-label="GitHub">
                        <FaGithub size={30} />
                    </a>
                    <p className={"text-3xl"}>
                        © 2024 Kirill Severin
                    </p>
                </li>
            </ul>
        </footer>
    );
}

export default FooterPage;
