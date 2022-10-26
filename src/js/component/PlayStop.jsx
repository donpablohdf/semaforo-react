import React, { useContext } from 'react'
// contexto
import Lucifer from '../../context/Lucifer.js';
export default function PlayStop() {
    const {luz, setLuz}  = useContext(Lucifer);
	return (    
        <div className='col p-3 bg-light d-flex justify-content-start bg-info'>
            {luz.isPlaying? 
            <i className="fas fa-stop fa-2x" onClick={() => setLuz({...luz, isPlaying: !luz.isPlaying})}></i>
            : 
            <i className="fas fa-play fa-2x" onClick={() => setLuz({...luz, isPlaying: !luz.isPlaying})}></i>
            }
        </div>
    )

}