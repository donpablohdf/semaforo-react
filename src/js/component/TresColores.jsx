import React, { useState } from 'react'
//import './funciones.jsx'
import { useInterval } from 'usehooks-ts'

export default function TresColores() {
    const [delay, setDelay] = useState(1000)
    // ON/OFF
    const [isPlaying, setPlaying] = useState(false) //controla el play /pause

    useInterval(
    () => {
        // Your custom logic here
        console.log(isPlaying);
    // Delay in milliseconds or null to stop it
    },isPlaying ? delay : null,
    )


    return (
        
        <div className='col p-3 bg-light d-flex justify-content-end'>
            {isPlaying ? 
            <i className="fas fa-stop fa-2x" onClick={() => setPlaying(!isPlaying)}></i>
            : 
            <i className="fas fa-play fa-2x" onClick={() => setPlaying(!isPlaying)}></i>
            }
        </div>
        
        
    )
}