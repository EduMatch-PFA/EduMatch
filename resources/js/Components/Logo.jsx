import { Link } from "@inertiajs/react";
import React from "react";
import logoDark from "../Logo/LogoDarkpng.png"; // dark theme logo image
import logoWhite from "../Logo/logo.png"; //  white theme logo image

export default function Logo({ className, darkTheme }) {
    // Choose the appropriate logo based on the theme
    const logoSrc = darkTheme ? logoWhite : logoDark;
    const logoAlt = darkTheme ? "EduMatch (White)" : "EduMatch (Dark)";

    return (
        <Link href="/">
            <div className="Logo cursor-pointer relative z-50">
                <img
                    src={logoSrc} 
                    alt={logoAlt}
                    className={className}
                    style={{ width: "220px", height: "80px" }} // Adjust width and height as needed
                />
            </div>
        </Link>
    );
}
