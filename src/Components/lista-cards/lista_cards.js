import React, { useState } from 'react'
import "./style.css"
import Card from '../Card'
import Boton from '../Boton'
export default function lista_cards() {

const [productos, setproductos]=useState([{
  nombre: "Gyozas",
  valor: 12000,
  categoria:"entrada"
},
{
  nombre: "Pitas",
  valor: 8000,
  categoria:"entrada"
},
{
  nombre: "Palito Queso",
  valor: 10000,
  categoria:"entrada"
},
{
  nombre: "Ramen",
  valor: 25000,
  categoria:"fuerte"
},
{
  nombre: "Sushi",
  valor: 20000,
  categoria:"fuerte"
},
{
  nombre: "Arroz Cantones",
  valor: 22000,
  categoria:"fuerte"
},
{
  nombre: "Limonada",
  valor: 5000,
  categoria:"bebida"
},
{
  nombre: "Cerveza",
  valor: 8000,
  categoria:"bebida"
},
{
  nombre: "Sake",
  valor: 10000,
  categoria:"bebida"
},
{
  nombre: "Tiramisu",
  valor: 17500,
  categoria:"postre"
},
{
  nombre: "Pie de limon",
  valor: 17000,
  categoria:"postre"
},
{
  nombre: "Flan",
  valor: 13000,
  categoria:"postre"
}]);


const [Oscuro, setOscuro]=useState(true);
const activador=()=>{
  setOscuro(!Oscuro)
}


  return (
    <div className='flex' style={Oscuro?{backgroundColor:"black"}:{backgroundColor:"white"}}>
      {productos.map((elm)=>{
        return <Card nombres={elm.nombre} precio={elm.valor} categoria={elm.categoria}/>
      })}
      <boton titulo="Modo Oscuro / Claro" funcion={activador}/>
    </div>
  )
}
