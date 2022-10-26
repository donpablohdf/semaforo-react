import React, { useContext } from 'react'
import Lucifer from '../../context/Lucifer.js';


export default function Semaforo() {
    const datos  = useContext(Lucifer);
    const creaMG=datos.luz.creaMG

    const enRoja= datos.luz.luzRoja
    const enAmarilla= datos.luz.luzAmarilla
    const enVerde= datos.luz.luzVerde
    const enMagenta= datos.luz.luzMagenta
    const enNegro= "luzNegra"


return (
<div>
    {/* luz roja */}
    <div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
        <i 
            className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + enRoja} 
            onClick={() => enRoja == "luzRoja" ? datos.setLuz({...datos.luz, luzRoja: enNegro }) : datos.setLuz({...datos.luz, luzRoja: "luzRoja" })}
        ></i>
    </div>
    {/* luz amarilla */}
    <div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
        <i 
            className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + enAmarilla} 
            onClick={() => enAmarilla == "luzAmarilla" ? datos.setLuz({...datos.luz, luzAmarilla: enNegro }) : datos.setLuz({...datos.luz, luzAmarilla: "luzAmarilla" })}
        ></i>
    </div>
    {/* luz verde */}
    <div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
        <i 
            className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + enVerde} 
            onClick={() => enVerde == "luzVerde" ? datos.setLuz({...datos.luz, luzVerde: enNegro }) : datos.setLuz({...datos.luz, luzVerde: "luzVerde" })}
                
        ></i>
    </div>

    {/* crea o mata magenta según el botón */}
    { //si pulsamos el botón  + (de crear magenta) crea el nuevo elemento 
    creaMG ? ( 
        <div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
            <i 
            className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + enMagenta} 
            onClick={
                () => enMagenta == "luzMagenta" ? datos.setLuz({...datos.luz, luzMagenta: enNegro }) : datos.setLuz({...datos.luz, luzMagenta: "luzMagenta" })
                
            }>
            </i>
        </div>
    ) 
    // si pulsamos el botón de eliminar magenta	crea un fragmento vacío		
    : (<></>)}
</div>

)
}
