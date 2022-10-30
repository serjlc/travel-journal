import React from "react"
import logo from "../images/logo.png"

export default function Nav() {
    return (
        <nav>
            <img className="nav--logo" src={logo} alt="" />
            <h1 className="nav--title"> my travel journal.</h1>
        </nav>

    )
}