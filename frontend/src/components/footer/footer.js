import React , { Component } from 'react';
import './footer.css';
class Footer extends Component {
    render() {
        return (

                <div className= "footer">
                <div className="containerFooter contact">

                    <div className="footerText">
                        <h2 className="titleFooter"> Contacto </h2>
                        <p className="titleParagraphFooter">Trabaja con nosotros, todos necesitamos crecer y mejorar.</p>
                    </div>
                    <form action="" className="form" method="post">

                        <input type="text" name="name" placeholder="Nombre" id="1" className="nameContact"/>
                            <input type="email" name="name" placeholder="Correo" id="2" className="nameEmail"/>
                                <textarea name="message" className="message" placeholder="Mensaje:"></textarea>
                                <div className="right">
                                    <input type="submit" value="Contactar" className="bottonSend"></input>
                                </div>
                    </form>
                </div>
                    </div>

        )
    }
}

export default Footer;