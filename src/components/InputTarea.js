import React, { useState } from "react";

//Estilos
import '../styles/InputTarea.css';

//uuid
import { v4 as uuidv4 } from 'uuid';

function InputTarea(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    //No recarga toda la pagina cuando envia el formulario
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    const inputDOM = document.getElementById('task-input');
    inputDOM.value = '';
    setInput('');
    props.onSubmit(tareaNueva);


  }
  return (
    <form
      className='form-input-tarea'
      onSubmit={manejarEnvio}>
      <input
        id='task-input'
        className='input-tarea'
        type='text'
        placeholder='Ingresa una tarea'
        name='texto'
        onChange={manejarCambio} />
      <button
        className='boton-input-tarea'>
        Agregar tarea
      </button>
    </form>
  )
}


export default InputTarea;