import React, { useState } from 'react'

const Form = ({lista, setLista}) => {

    // desestrucuracion donde estara useState
    const [nombre, setNombre] = useState("");
    const [mundo, setMundo] = useState("");

    // prevenir que se actualice la pagina cuando se acepta el formulario
    const adminFormulario = (evento) => {
        evento.preventDefault();
        const nuevoPersonaje = {
            nombre,
            mundo
        } 
        setLista([...lista, nuevoPersonaje])
    }

  return (
    <div className='border border-success'>
        <form className = 'form' onSubmit={adminFormulario}>
        <div className='mb-3'>
                <label className ='form-label' htmlFor=""> Nombre </label>
                <input type="text" onChange={(evento) => setNombre(evento.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className ='form-label' htmlFor=""> Nombre </label>
                <input type="text" onChange={(evento) => setMundo(evento.target.value)}/>
                
            </div>
        <button type = 'submit' className='btn btn-primary'> agregar pesonaje</button>
        </form>
    </div>
  )
}

export default Form