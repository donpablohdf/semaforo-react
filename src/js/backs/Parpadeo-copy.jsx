import React, {useContext, useState } from 'react'
import { useInterval, useTimeout } from 'usehooks-ts'
import Lucifer from '../../../context/Lucifer.js';

export default function Parpadeo(params) {
    const es = params.tipo
    const {luz, setLuz}  = useContext(Lucifer);
    
    switch (params.tipo) {
        case 'luzRoja':
            useInterval( ()=>{setLuz({...luz, luzRoja: "luzRoja"})},luz.isPlaying ? params.delay1 : null,)
            useInterval( ()=>{setLuz({...luz, luzRoja: "luzNegra"})},luz.isPlaying ? params.delay2: null,)
        break;
        case 'luzAmarilla':
            
            useInterval( ()=>{setLuz({...luz, luzAmarilla: "luzAmarilla"})},luz.isPlaying ? params.delay1 : null,)
            useInterval( ()=>{setLuz({...luz, luzAmarilla: "luzNegra"})},luz.isPlaying ? params.delay2: null,)
        break;
        case 'luzVerde':
            
            useInterval( ()=>{setLuz({...luz, luzVerde: "luzVerde"})},luz.isPlaying ? params.delay1 : null,)
            useInterval( ()=>{setLuz({...luz, luzVerde: "luzNegra"})},luz.isPlaying ? params.delay2 : null,)
        break;
        // case 'luzMagenta':
            
        //     useInterval( ()=>{setLuz({...luz, luzMagenta: "luzMagenta"})},luz.isPlaying ? params.delay1 : null,)
        //     useInterval( ()=>{setLuz({...luz, luzMagenta: "luzNegra"})},luz.isPlaying ? params.delay2 : null,)
            
        // break;
        // case luz.isPlaying:
        //     setLuz({...luz, luzRoja: "luzNegra"})
        //     setLuz({...luz, luzAmarilla: "luzNegra"})
        //     setLuz({...luz, luzVerde: "luzNegra"})
        //     setLuz({...luz, luzMagenta: "luzNegra"})
        // break;
    }
    return ( <></>)
}