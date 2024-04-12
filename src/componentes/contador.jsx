import React, { useState } from 'react'

export default function Contador() {
    const [resultado, setResultado] = useState(0)
    const [n1, setn1] = useState(0)
    const [n2, setn2] = useState(0)

    const primero = (e) =>{
        setn1(Number(e.target.value))
    }

    const segundo = (e) =>{
        setn2(Number(e.target.value))
    }

    const suma = () =>{
        setResultado(n1 + n2)
    }
    const resta = () =>{
        setResultado(n1 - 2)
    }
    const reiniciar = () =>{
        setn1(0);
        setn2(0);
        setResultado(0);
    }

    
  return (
    <div>
        <input type="text" placeholder='primer valor' onChange={primero}/>
        <input type="text" placeholder='segundo valor' onChange={segundo}/>
        <button onClick={() => suma()}>Sumar</button>
        <button onClick={() => resta()}> Restar</button>
        <button onClick={() => reiniciar()}>Reinicar</button>

        <h1>El resultado es: {resultado}</h1>


    </div>
  )
}
