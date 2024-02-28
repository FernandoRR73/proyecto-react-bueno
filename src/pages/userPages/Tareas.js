import ListaDeTareas from '../../components/userComponents/ListaTareas/ListaTareas';

function Tareas() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default Tareas;