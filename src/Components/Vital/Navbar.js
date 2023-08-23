import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import { useState } from 'react'

function Navbar() {
    let isDarkMode = useContext(ThemeContext)
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="specificimg/navbar.png" height="36" />
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
                                <a class="nav-link" href="/cart"><i class="fa-solid fa-cart-shopping"></i></a>
                            </li>
                            <button class="bg-transparent border-0 rounded" onClick={ChangeTheme}><i class="fa-solid fa-moon"></i></button>
                        </ul>

                        <form class="d-flex mx-auto w-50">
                            <input class="form-control me-2" type="search" placeholder="Busca algo..." aria-label="Search" />
                            <button class="btn btn-outline-success w-25" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>                           
                        </form>

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