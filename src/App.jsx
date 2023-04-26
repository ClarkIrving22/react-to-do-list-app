import logoReact from './imagenes/freecodecamp-logo.png'
import './App.css'
import ListaDeTareas from './componentes/listadetareas'

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={logoReact} className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
//06:57:30