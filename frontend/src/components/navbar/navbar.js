import React , { Component } from 'react';
import './navbar.css';
class Navbar extends Component {
    render() {
        return (
                <div className= "containerNavbar">
                    <div className= "navbar">
                    <h1>SPACEFILM CLUB</h1>
                    <ul className= "iniciarSesionNavbar">
                        <li className= "botonIniciarSesion">Iniciar sesión</li>
                    </ul>
                    </div>
                </div>
        )
    }
}

export default Navbar;