import React, { useState } from 'react'

const enMagenta="luzMagenta"
let IDintervalo;

const enNegro="luzNegra"

export default function CrearMagenta() {
    //nuevo circulo magenta
	const [creaMG, setMG]= useState(false);
	//control de semaforo
	return (
        // botón crea y mata magenta 
        <div className='col p-3 bg-light d-flex justify-content-end'>					
        {
            
        creaMG ? (<i className="fas fa-minus fa-2x" onClick={() =>{ setMG(false);}}></i>) 
                : (<i className="fas fa-plus fa-2x"  onClick={() =>{ setMG(true);}}></i>)
        }
        </div>
    )
}