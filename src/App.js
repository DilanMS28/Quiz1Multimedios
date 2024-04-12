
import "./App.css";
import Likes from "./componentes/likes";
import Entrada from "./componentes/entrada";
import Contador from "./componentes/contador";
import Modal from "./componentes/modal";
import React from "react";

function App() {
  return (
    <div className="App">
      <p>Ejercicio 1</p>
      <Likes/>
      <br/>
      <br/>
      <p>Ejercicio 2</p>
      <Entrada/>
      <br/>
      <br/>
      <p>Ejercicio 3</p>
      <Contador/>
      <br/>
      <br/>
      <p>Ejercicio 4</p>
      <Modal/>
    </div>
  );
}

export default App;
