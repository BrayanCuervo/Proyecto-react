import React from 'react'
import "./style.css"

export default function Card({nombres, precio, categoria, oscuro}) {

  return (
        <div className={oscuro?'card-container claro':'card-container'}>
            <p>{nombres}</p>
            <p>{precio}</p>
            <p>{categoria}</p>

        </div>
  )
}
