import React , { Component } from 'react';
import './navbar.css';
class Navbar extends Component {
    render() {
        return (
                <div className= "containerNavbar">
                    <div className= "navbar">
                    <h1>SPACEFILM CLUB</h1>
                    <ul className= "iniciarSesionNavbar">
                        <a href='#toLogin' className= "botonIniciarSesion">Iniciar sesión</a>
                    </ul>
                    </div>
                </div>
        )
    }
}

export default Navbar;