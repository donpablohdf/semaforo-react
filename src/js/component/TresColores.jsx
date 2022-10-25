import React, { useState } from 'react'
//import './funciones.jsx'
import { useInterval } from 'usehooks-ts'
const enMagenta="luzMagenta"

const enNegro="luzNegra"

export default function TresColores() {
    const [creaMG, setMG]= useState(false);

    const [delay, setDelay] = useState(1000)
    // ON/OFF
    const [isPlaying, setPlaying] = useState(false) //controla el play /pause
	const [Magenta, setMagenta] = useState(enMagenta);

    useInterval(
    () => {
        // Your custom logic here
        console.log(isPlaying);
    // Delay in milliseconds or null to stop it
    },isPlaying ? delay : null,
    )


    return (        
        <div className='col p-3 bg-light d-flex justify-content-start'>
            {isPlaying ? 
            <i className="fas fa-stop fa-2x" onClick={() => setPlaying(!isPlaying)}></i>
            : 
            <i className="fas fa-play fa-2x" onClick={() => setPlaying(!isPlaying)}></i>
            }
        </div>
        
    )
}