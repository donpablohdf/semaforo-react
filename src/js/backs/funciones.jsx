import React, { useState } from 'react'
import { useInterval } from 'usehooks-ts'

const enRoja= "luzRoja"
const enAmarilla="luzAmarilla"
const enVerde="luzVerde"
const enMagenta="luzMagenta"
const enNegro="luzNegra"

const [Roja, setRoja] = useState(enNegro);
const [Amarilla, setAmarilla] = useState(enNegro);
const [Verde, setVerde] = useState(enNegro);
//nuevo circulo magenta
const [Magenta, setMagenta] = useState(enMagenta);

//control de semaforo
const [ParaSemaforo, setPara]= useState(false);

// movimiento de luces
const tresColores = () =>{
    IDintervalo = 
    setInterval(() => {
        setRoja(enRoja);
        setAmarilla(enNegro);
        setVerde(enNegro);
        
        setTimeout(()=>{
            setRoja(enNegro);
            setAmarilla(enAmarilla);
            setVerde(enNegro);
        }, 333);	
        setTimeout(()=>{
            setRoja(enNegro);
            setAmarilla(enNegro);
            setVerde(enVerde);
        }, 666);
    }, 999);
    
    setTimeout(() => {
        setRoja(enRoja);
    }, 1005);
    
    

}
const cuatroColores = () =>{
    
    IDintervalo = setInterval(() => {
        setRoja(enRoja);
        setAmarilla(enNegro);
        setVerde(enNegro);
        setMagenta(enNegro);
        
        setTimeout(()=>{
            setRoja(enNegro);
            setAmarilla(enAmarilla);
            setVerde(enNegro);
            setMagenta(enNegro);
        }, 333);	
        setTimeout(()=>{
            setRoja(enNegro);
            setAmarilla(enNegro);
            setVerde(enVerde);
            setMagenta(enNegro);
        }, 666);
        setTimeout(()=>{
            setRoja(enNegro);
            setAmarilla(enNegro);
            setVerde(enNegro);
            setMagenta(enMagenta);
        }, 999);
    }, 1332);
    setTimeout(() => {
        setRoja(enRoja);
    }, 1005);
}
//todos a negro
const todosNegro= () =>{
    setMagenta(enNegro);
    setRoja(enNegro);
    setAmarilla(enNegro);
    setVerde(enNegro);
}

//control del semaforo
const arrancaSemaforo = () =>{
    
    if(!ParaSemaforo && !creaMG){ setTimeout(() => {
        tresColores();			
    }, 50); }

    if(!ParaSemaforo && creaMG) { setTimeout(() => {
        cuatroColores();			
    }, 50); }
    setPara(true);
    todosNegro();
}


const pararSemaforo= () =>{		
    
    setPara(false);
    clearInterval(IDintervalo);
    IDintervalo=false;
    setTimeout(() => {
        todosNegro();
    }, 250);
    
    
}