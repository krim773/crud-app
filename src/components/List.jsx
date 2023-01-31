import React from 'react'
import { useState } from 'react'


// va a llegar cierta informacion desde props
//const List = (props) => {
    // desestructurar
//    const { lista } = props


// SEGUNDO TIPO DE DESTRUSCTURACION
const List = ({lista, setLista}) => {

    const [nombre, setNombre] = useState ("")

    const eliminaPersonaje =(nombrePersonaje) => {
        // metodo tipo callback (filter)
        // para eliminar un tipo de informacion
        const personajeEliminado = lista.filter ((personaje) =>{
            return personaje.nombre != nombrePersonaje
        })

    return setLista (personajeEliminado)
    }

    const actualizaPersonaje = (indiceObjeto) => {
        const personajeActualizado = lista.map((personaje, indice) => {
            if (indice === indiceObjeto) {
                personaje.nombre = nombre
            }

            return personaje
        })
        setLista(personajeActualizado)
    }

    return (
        <div className='border border-warning'>
            <h1>lista de personajes</h1>
            <hr />


{/* maping */}
            {lista.map((personaje, indice) =>
                <>
                    <p>Nombre: {personaje.nombre}</p>
                    <p>Mundo: {personaje.mundo}</p>
                    <button className='btn btn-danger' conClick = {() => eliminaPersonaje (personaje.nombre)}>Elimina a {personaje.nombre}</button>
                    <input type="text" onChange={(evento) => setNombre (evento.target.value)} />
                    <button onClick = {() => actualizaPersonaje (indice)} className='btn btn-warning'>Actualizar Nombre</button>
                    <hr />
                </>
            )}

        </div>
    )
}

export default List