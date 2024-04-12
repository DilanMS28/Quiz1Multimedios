import React, { useState } from 'react'

export default function Modal() {
    const [mostrar, setMostrar] = useState(false)

    const toggleModal = (e) =>{
        setMostrar(!mostrar)
    }

  return (
    <div>
      <button onClick={()=>toggleModal()}>{mostrar ? 'Cerrar' : 'Abrir'}</button>

      {mostrar && (
        <div className="modal">
          <div className="modal-content">
            <h2>Bienvenidos al curso de multimedios</h2>
            {/* <p>Contenido del modal...</p> */}
            {/* <button onClick={toggleModal}>Cerrar</button> */}
          </div>
        </div>
      )}


    </div>
  )
}
