import React, { useState } from 'react';


//create your first component
const TrafficLight = () => {
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
	const [creaMG, setMG]= useState(false);
	//control de semaforo
	const [ParaSemaforo, setPara]= useState(false);
	const [IDinterval, setIter] = useState(0);

	const arrancaSemaforo = () =>{
		
		if(!ParaSemaforo && !creaMG){ tresColores();} 
		if(!ParaSemaforo && creaMG) { cuatroColores();}
		setPara(true);
	}

	const paraSemaforo= () =>{		
		setPara(false);
		setIter(clearInterval(IDinterval));
	}

	const tresColores = () =>{
		setRoja(enRoja);
		setIter (setInterval(() => {
			setRoja(enRoja);
			setAmarilla(enNegro);
			setVerde(enNegro);
			
			setTimeout(()=>{
				setRoja(enNegro);
				setAmarilla(enAmarilla);
				setVerde(enNegro);
			}, 1000);	
			setTimeout(()=>{
				setRoja(enNegro);
				setAmarilla(enNegro);
				setVerde(enVerde);
			}, 1500);
		}, 2000));
	}
	const cuatroColores = () =>{
		setMagenta(enMagenta);
		setIter (setInterval(() => {
			setMagenta(enMagenta);
			setRoja(enNegro);
			setAmarilla(enNegro);
			setVerde(enNegro);

			setTimeout(()=>{
				setMagenta(enNegro);
				setRoja(enNegro);
				setAmarilla(enNegro);
				setVerde(enVerde);
			}, 1000);
			
			setTimeout(()=>{
				setMagenta(enNegro);
				setRoja(enNegro);
				setAmarilla(enAmarilla);
				setVerde(enNegro);
			}, 1500);	

			setTimeout(()=>{
				setMagenta(enNegro);
				setRoja(enRoja);
				setAmarilla(enNegro);
				setVerde(enNegro);
			}, 2000);
		}, 2500));
	}
	return (
	<><div>
			<div className="p-3 bg-warning rounded-top"><i className={"fas fa-circle fa-5x " + Roja} onClick={() => Roja == "luzRoja" ? setRoja(enNegro) : setRoja(enRoja)}></i></div>
			<div className="p-3 bg-warning"><i className={"fas fa-circle fa-5x " + Amarilla} onClick={() => Amarilla == "luzAmarilla" ? setAmarilla(enNegro) : setAmarilla(enAmarilla)}></i></div>
			<div className="p-3 bg-warning shadow"><i className={"fas fa-circle fa-5x " + Verde} onClick={() => Verde == "luzVerde" ? setVerde(enNegro) : setVerde(enVerde)}></i></div>
			{creaMG ? (<div className="p-3 bg-warning shadow"><i className={"fas fa-circle fa-5x " + Magenta} onClick={() => Magenta == "luzMagenta" ? setMagenta(enNegro) : setMagenta(enMagenta)}></i></div>) : (<></>)}

			<div className="row shadow p-1 bg-light mt-2 ">
				<div className='col p-3'>
					{ParaSemaforo ? (<i className="fas fa-stop fa-2x " onClick={() => paraSemaforo()}></i>) : (<i className="fas fa-play fa-2x " onClick={() => arrancaSemaforo()}></i>)}
				</div>
				<div className='col p-3'>
					{creaMG ? (<i className="fas fa-minus fa-2x" onClick={() => setMG(false)}></i>) : (<i className="fas fa-plus fa-2x" onClick={() => setMG(true)}></i>)}
				</div>
			</div>
		</div>
		<div className='m-5'>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Al pulsar sobre cualquier círculo cambia de negro a su color correspondiente y viceversa</li>
				<li className="list-group-item">Al pulsar sobre <i className="fas fa-plus"></i> crea el círculo magenta, que al pulsar sobre él cambia el color a negro y viceversa.<br/> 
				Al pulsar sobre <i className="fas fa-minus"></i> desaparece el círculo magenta</li>
				<li className="list-group-item">Al pulsar sobre <i className="fas fa-play"></i> arranca el semáforo y cambia el estado del botón a <i className="fas fa-stop"></i> para poder pararlo.<br/>
				Funciona tanto como si está el magenta como si no.  </li>
				<li className="list-group-item bg-danger text-center h2">DEPURAR</li>
				<li className="list-group-item bg-danger ">El semáforo no funciona como debería. Creo que por settimeout</li>
				<li className="list-group-item bg-danger ">Parar el semáforo no funciona como debería.<br/> He tenido que usar una variable useState para meter el intervalo porque así es como mejor se para. </li>
				<li className="list-group-item bg-danger ">El borde redondeado de arriba no coge el diámetro que le mando</li>
				<li className="list-group-item bg-danger ">¿Las variables useState como se pasan de un componete a otro?</li>
			</ul>
		</div>
		</>
	);
};

export default TrafficLight;
