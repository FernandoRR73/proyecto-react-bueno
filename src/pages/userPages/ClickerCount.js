import '../../styles/contador/clickerCont.css';
import Boton from '../../components/userComponents/contadorClics/Button';
import Contador from '../../components/userComponents/contadorClics/ContadorClics';

import { useState } from 'react';

function ClickerCount() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className= 'ClickerCount'>
      <div className='contenedor'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default ClickerCount;
