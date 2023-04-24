import React from "react";

//Estilos
import '../styles/Tarea.css'

//React Icons
import { AiOutlineCloseCircle } from "react-icons/ai";


function Tarea(props) {
  return (
    <div className={`contenedor-tarea ${props.completada ? 'completada' : ''}`.trimEnd()}>
      <div
        className='texto-tarea'
        onClick={() => props.completarTarea(props.id)}>
        {props.texto}
      </div>
      <div
        className='contenedor-icono'
        onClick={() => props.eliminarTarea(props.id)}>
        <AiOutlineCloseCircle className='icono-tarea' />
      </div>
    </div>
  )
}



export default Tarea;