import React, { useState } from 'react'

export default function Modal() {
    const [mostrar, setMostar] = useState(false)

    const toggleModal = (e) =>{
        setMostrar(!mostar)
    }

  return (
    <div>
      <button onClick={()=>toggleModal()}>Cerrar</button>
    </div>
  )
}
