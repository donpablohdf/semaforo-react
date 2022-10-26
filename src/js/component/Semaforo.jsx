import React, { useContext } from 'react'
import Lucifer from '../../context/Lucifer.js';


export default function Semaforo() {
    const {luz, setLuz}  = useContext(Lucifer);

    return (
        <div>
            {/* luz roja */}
            <div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
                <i 
                    className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + luz.luzRoja} 
                    onClick={() => luz.luzRoja == "luzRoja" ? setLuz({...luz, luzRoja: luz.luzNegra }) : setLuz({...luz, luzRoja: "luzRoja" })}
                ></i>
            </div>
            {/* luz amarilla */}
            <div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
                <i 
                    className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + luz.luzAmarilla} 
                    onClick={() => luz.luzAmarilla == "luzAmarilla" ? setLuz({...luz, luzAmarilla: luz.luzNegra }) : setLuz({...luz, luzAmarilla: "luzAmarilla" })}
                ></i>
            </div>
            {/* luz verde */}
            <div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
                <i 
                    className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + luz.luzVerde} 
                    onClick={() => luz.luzVerde == "luzVerde" ? setLuz({...luz, luzVerde: luz.luzNegra }) : setLuz({...luz, luzVerde: "luzVerde" })}
                        
                ></i>
            </div>

            {/* crea o mata magenta según el botón */}
            { //si pulsamos el botón  + (de crear magenta) crea el nuevo elemento 
            luz.creaMG ? ( 
                <div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
                    <i 
                    className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + luz.luzMagenta} 
                    onClick={
                        () => luz.luzMagenta == "luzMagenta" ? setLuz({...luz, luzMagenta: luz.luzNegra }) : setLuz({...luz, luzMagenta: "luzMagenta" })
                        
                    }>
                    </i>
                </div>
            ) 
            // si pulsamos el botón - (eliminar magenta) crea un fragmento vacío		
            : (<></>)}
        </div>
    )
}
