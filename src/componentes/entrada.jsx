import React, { useState } from 'react'

export default function Entrada() {
    const [mensaje, setMensaje] = useState("No definido")

    const cambio = (e) =>{
        setMensaje(e.target.value)
    }

  return (
    <div>
        <h1>Su nombre: {mensaje}</h1>
        <input type="text" name="" id=""  onChange={cambio}/>
    </div>
  )
}
