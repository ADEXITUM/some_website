import React from "react"

const Nav = function () {
    function openAuthMenu () {
        document.querySelector('.authmenu').classList.add('active-popup')
        document.querySelector('.parallax').classList.add('active-popup')
    }

    return (
        <header>
            <h2 class="logo">ADEXITUM</h2>
            <nav class="navigation">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Contacts</a>
                <a href="#">About</a>
                <button class="btnLogin-popup" onClick={openAuthMenu}>Login</button>
            </nav>
        </header>
    )
}

export default Nav