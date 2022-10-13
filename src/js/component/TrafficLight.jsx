import React, { useState, useEffect } from 'react';


//create your first component
const TrafficLight = () => {
	const enRoja= "luzRoja"
	const enAmarilla="luzAmarilla"
	const enVerde="luzVerde"
	const enNegro="luzNegra"

	const [Roja, setRoja] = useState(enNegro);
	const [Amarilla, setAmarilla] = useState(enNegro);
	const [Verde, setVerde] = useState(enNegro);
	const [Para, setPara]= useState(false);
	const [IDinterval, setIter] = useState(false);
	const arrancaSemaforo = () =>{
		setRoja(enRoja);
		if(!Para){
		setIter (setInterval(() => {
			
				setTimeout(()=>{
					setRoja(enRoja);
					setAmarilla(enNegro);
					setVerde(enNegro);
				}, 1000);
				setTimeout(()=>{
					setRoja(enNegro);
					setAmarilla(enAmarilla);
					setVerde(enNegro);
				}, 1500);	
				setTimeout(()=>{
					setRoja(enNegro);
					setAmarilla(enNegro);
					setVerde(enVerde);
				}, 2000);
					
			}, 2001))
		}
		setTimeout(()=>{setPara(true);},500);
	}
	const paraSemaforo= () =>{		
		setPara(false);
		todoNegro;	
		setIter(clearInterval(IDinterval));
		todoNegro;
	}
	const todoNegro = () =>{
		setRoja(enNegro);
		setAmarilla(enNegro);
		setVerde(enNegro);
	}
	return (
	<div className="contenedorSemaforo">		
			<div className="row p-1 bg-warning"><i className={"fas fa-circle fa-5x " + Roja} onClick={() => Roja == "luzRoja" ? setRoja(enNegro) : setRoja(enRoja)} ></i></div>
			<div className="row p-1 bg-warning"><i className={"fas fa-circle fa-5x " + Amarilla} onClick={() => Amarilla == "luzAmarilla" ? setAmarilla(enNegro) : setAmarilla(enAmarilla)}></i></div>
			<div className="row p-1 bg-warning"><i className={"fas fa-circle fa-5x " + Verde} onClick={() => Verde == "luzVerde" ? setVerde(enNegro) : setVerde(enVerde)} ></i></div>
			
			<div className="row p-1 bg-light d-flex justify-content-center">
				{ Para ? (<i className="fas fa-stop fa-2x " onClick={() => paraSemaforo()} ></i>):(<i className="fas fa-play fa-2x " onClick={() => arrancaSemaforo()} ></i>)}
			</div> 
	</div>
	);
};

export default TrafficLight;
