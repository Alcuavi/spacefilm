import React , { Component } from 'react';
import './iniciarSesion.css';
class IniciarSesion extends Component {
    render() {
        return (
            <div id="toLogin" className= "containerIniciarSesion">
                <div  className="form1">
                    <form action="mysuperscript.php" autoComplete="on">
                        <h1>Login</h1>
                        <p className="p1">
                            <label htmlFor="username" className="uname"> Nombre de usuario: </label>
                            <input id="username" name="username" required="required" type="text"
                                   placeholder="Tu nombre de usuario"/>
                        </p>
                        <p className= "p1">
                            <label htmlFor="password" className="youpasswd"> Contraseña:</label>
                            <input id="password" name="password" required="required" type="password"
                                   placeholder="Tu password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                   title="Debe contener al menos un número y una letra minúscula y mayúscula, y al menos 8 o más caracteres"/>
                        </p>

                        <p className="login button">
                            <input className= "b1" type="submit" value="Login"/>
                        </p>
                        <p className="change_link">
                            Aún no eres miembro
                            <a href="#toregister" className="to_register">Regístrate</a>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default IniciarSesion;