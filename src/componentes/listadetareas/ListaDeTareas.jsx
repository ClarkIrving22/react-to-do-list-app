import './styles.css'
import Formulario from '../formulario'
import { useState } from 'react'
import Tarea from '../tarea'

const ListaDeTareas = () => {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim()
            const tareasActualizadas = [tarea, ...tareas]
            setTareas(tareasActualizadas)
        }
    }

    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(
            tarea => tarea.id !== id
        )
        setTareas(tareasActualizadas)
    }

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map(
            tarea => {
                if(tarea.id === id){
                    tarea.completada = !tarea.completada
                }
                return tarea
            }
        )
        setTareas(tareasActualizadas)
    }

    return(
        <div>
            <Formulario onSubmit={agregarTarea}/>
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) => 
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ListaDeTareas