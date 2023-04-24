import './App.css';


//Mis Componentes
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedor-lista'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>

    </div>
  );
}

export default App;
