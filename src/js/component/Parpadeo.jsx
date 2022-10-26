import React, {useContext, useState } from 'react'
import { useInterval, useTimeout } from 'usehooks-ts'
import Lucifer from '../../context/Lucifer.js';


//contexto
export default function Parpadeo(params) {

    const datos  = useContext(Lucifer);
    const nuevoObjet= datos.luz
    let valores = Object.values(nuevoObjet); // valores = ["Scott", "Negro", true, 5];
    for(let i=0; i< valores.length; i++){
        console.log(valores[i]);
    }
    console.log(valores);
    // ON/OFF
    
        // useInterval( ()=>{datos.setLuz({...datos.luz, luzAmarilla: "luzAmarilla"})},datos.luz.isPlaying ? 333 : null,)
        // useInterval( ()=>{datos.setLuz({...datos.luz, luzAmarilla: "luzNegra"})},datos.luz.isPlaying ? 666 : null,)
    
    
    
    // useInterval( ()=>{datos.setLuz({...datos.luz, enAmarilla: "luzAmarilla"})},isPlaying ? 333 : null,)
    // useInterval( ()=>{datos.setLuz({...datos.luz, enAmarilla: "luzNegra"})},isPlaying ? 666 : null,)
    
    // useInterval( ()=>{datos.setLuz({...datos.luz, enRoja: "luzRoja"})},isPlaying ? 999 : null,)
    // useInterval( ()=>{datos.setLuz({...datos.luz, enRoja: "luzNegra"})},isPlaying ? 1005 : null,)

    // useInterval( ()=>{datos.setLuz({...datos.luz, enVerde: "luzVerde"})},isPlaying ? 1333 : null,)
    // useInterval( ()=>{datos.setLuz({...datos.luz, enVerde: "luzNegra"})},isPlaying ? 1666 : null,)
    



    return ( <></>)
}