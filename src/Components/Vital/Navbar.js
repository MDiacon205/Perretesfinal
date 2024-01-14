import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { useState } from 'react'

function Navbar() {
    let { DarkMode, setDarkMode } = useContext(ThemeContext)
    let DarkColor = "#29282b"
    let LightColor = "white"

    function DarkModeFunction() {
    if (DarkMode == true) { setDarkMode(false); document.body.style.backgroundColor = "white" }
    else { setDarkMode(true); document.body.style.backgroundColor = DarkColor }
    }
    
    return (
        <div>            <nav className={ DarkMode == false ? "navbar navbar-expand-lg navbar-light bg-light p-2" : "navbar navbar-expand-lg navbar-dark bg-dark" }>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src={ DarkMode == false ? "specificimg/navbar.png" : "specificimg/navbarlight.png"} height="36" />
                        Perretes
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i class="fa-solid fa-list"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contacto</a>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={DarkModeFunction}>
                                    {DarkMode == false ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-lightbulb text-warning"></i>}
                                    </button>
                            </li>
                        </ul>
                        {/* <ul>
                               <a href="https://mdiaconchuk.github.io/portfolio/" class={ DarkMode == false ? "text-decoration-none text-dark fst-italic text-opacity-50 d-flex justify-content-center" : "text-decoration-none text-light fst-italic text-opacity-50 d-flex justify-content-center"} href="/cart">Matias Diaconchuk</a>
                            </ul> */}
                    </div>
                </div>
            </nav>
            {/* <div class="text-center text-dark border-top shadow" style={{ backgroundColor: "rgba(143, 143, 143, 0.2)" }}>
                <button class="btn" type="submit">Alimento</button>
                <button class="btn" type="submit">Jaulas</button>
                <button class="btn" type="submit">Juguetes</button>
                <button class="btn" type="submit">Redes sociales</button>
            </div> */}
        </div>
    )
}

export default Navbar