import React, { useContext } from 'react'
// contexto
import Lucifer from '../../context/Lucifer.js';
//const creaMg=false
export default function CrearMagenta() {
    const {luz, setLuz}  = useContext(Lucifer);
	return (     
        <div className='col p-3 bg-light d-flex justify-content-end'>
    {
    luz.creaMG  ? (<i className="fas fa-minus fa-2x" onClick={() =>{ setLuz({...luz, creaMG: !luz.creaMG})}} ></i>) 
            : (<i className="fas fa-plus fa-2x"  onClick={() =>{ setLuz({...luz, creaMG: !luz.creaMG})}} ></i>)
    }
    </div>
    )

}
