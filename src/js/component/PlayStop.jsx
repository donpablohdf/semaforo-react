import React, { useContext } from 'react'
// contexto
import Lucifer from '../../context/Lucifer.js';
export default function PlayStop() {
    const datos  = useContext(Lucifer);
	return (     
        <div className='col p-3 bg-light d-flex justify-content-start bg-info'>
            {datos.luz.isPlaying ? 
            <i className="fas fa-stop fa-2x" onClick={() => datos.setLuz({...datos.luz, isPlaying: !datos.luz.isPlaying})}></i>
            : 
            <i className="fas fa-play fa-2x" onClick={() => datos.setLuz({...datos.luz, isPlaying: !datos.luz.isPlaying})}></i>
            }
        </div>
    )

}