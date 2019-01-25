import React , { Component } from 'react';
import './home.css';
class Home extends Component {
    render() {
        return (
            <div className= "containerHome">
                <h1 className= "tituloHome">DESCUBRELO POR TI MISMO</h1>
                <ul className= "mesPrueba">
                    <a href='#toLogin' className= "botonMesPrueba"> Prueba un mes GRATIS </a>
                </ul>
            </div>
        )
    }
}

export default Home;