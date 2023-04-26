import './styles.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Formulario = (props) => {

    const [input, setInput] = useState('')

    const manejarCambio = (e) => {
        setInput(e.target.value)
    }

    const manejarEnvio = (e) => {
        e.preventDefault()
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva)
        setInput('')
    }

    return(
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambio}
                value={input}
            />
            <button className='tarea-boton'>Agregar tarea</button>
        </form>
    )
}

export default Formulario