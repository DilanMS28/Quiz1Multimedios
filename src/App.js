
import "./App.css";
import Likes from "./componentes/likes";
import Entrada from "./componentes/entrada";
import Contador from "./componentes/contador";
import Modal from "./componentes/modal";
import React from "react";

function App() {
  return (
    <div className="App">
      <Likes/>
      <br/>
      <br/>
      <Entrada/>
      <br/>
      <br/>
      <Contador/>
      <br/>
      <br/>
      {/* <Modal/> */}
    </div>
  );
}

export default App;
