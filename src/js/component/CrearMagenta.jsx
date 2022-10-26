import React, { useContext } from 'react'
// contexto
import Lucifer from '../../context/Lucifer.js';
//const creaMg=false
export default function CrearMagenta() {
    const datos  = useContext(Lucifer);
	return (     
        <div className='col p-3 bg-light d-flex justify-content-end'>
    {
    datos.luz.creaMG  ? (<i className="fas fa-minus fa-2x" onClick={() =>{ datos.setLuz({...datos.luz, creaMG: false})}} ></i>) 
            : (<i className="fas fa-plus fa-2x"  onClick={() =>{ datos.setLuz({...datos.luz, creaMG: true})}} ></i>)
    }
    </div>
    )

}
