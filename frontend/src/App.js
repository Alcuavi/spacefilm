import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import IniciarSesion from "./components/iniciarSesion/iniciarSesion";
import Registro from "./components/registro/registro";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar></Navbar>
          <Home></Home>
          <IniciarSesion/>
          <Registro/>
          <Footer/>
      </div>
    );
  }
}

export default App;
