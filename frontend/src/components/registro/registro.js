import React , { Component } from 'react';
import './registro.css';
class Registro extends Component {
    render() {
        return (
            <div id="toregister" className= "containerRegistro">
            <div className="form2">
                <form action="mysuperscript.php" autoComplete="on">
                    <h1> Registro</h1>
                    <p className= "p2">
                        <label htmlFor="usernamesignup" className="uname">Tu nombre</label>
                        <input className= "b2" id="usernamesignup" name="usernamesignup" required="required" type="text"
                               placeholder="Nombre"/>
                    </p>
                    <p className= "p2">
                        <label htmlFor="emailsignup" className="youmail"> Tu email</label>
                        <input className= "b2" id="emailsignup" name="emailsignup" required="required" type="email"
                               placeholder="ejemplo@mail.com"/>
                    </p>
                    <p className= "p2">
                        <label htmlFor="passwordsignup" className="youpasswd">Tu password </label>
                        <input className= "b2" id="passwordsignup" name="passwordsignup" required="required" type="password"
                               placeholder="eg. X8df!90EO" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                               title="Debe contener al menos un número y una letra minúscula y mayúscula, y al menos 8 o más caracteres"/>
                    </p>
                    <p className= "p2">
                        <label htmlFor="passwordsignup_confirm" className="youpasswd">Confirma tu password </label>
                        <input  className= "b2" id="passwordsignup_confirm" name="passwordsignup_confirm" required="required"
                               type="password" placeholder="eg. X8df!90EO"/>
                    </p>
                    <p className="signin button">
                        <input className= "b21" type="submit" value="Registro"/>
                    </p>
                    <p className="change_link">
                        Ya eres miembro
                        <a href="#toLogin" className="to_register"> Loguéate </a>
                    </p>
                </form>
            </div>
            </div>
        )
    }
}

export default Registro;