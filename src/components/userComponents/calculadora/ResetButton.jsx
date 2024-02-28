import React from 'react';
import '../../../styles/calculadora/botonReset.css';

const ResetButton = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default ResetButton;