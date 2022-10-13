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
	const [Magenta, setMagenta] = useState(enNegro);

	const [ParaSemaforo, setPara]= useState(false);
	const [IDinterval, setIter] = useState(0);
	const arrancaSemaforo = () =>{
		
		if(!ParaSemaforo){
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
			console.log(IDinterval);		
			}, 2000))
		}
		setTimeout(()=>{setPara(true);},500);
	}
	const paraSemaforo= () =>{		
		setPara(false);
		setIter(clearInterval(IDinterval));
		;
	}

	return (
	<div className="shadow-lg ">		
			<div className=" p-3 bg-warning rounded-top"><i className={"fas fa-circle fa-5x " + Roja} onClick={() => Roja == "luzRoja" ? setRoja(enNegro) : setRoja(enRoja)} ></i></div>
			<div className="p-3 bg-warning"><i className={"fas fa-circle fa-5x " + Amarilla} onClick={() => Amarilla == "luzAmarilla" ? setAmarilla(enNegro) : setAmarilla(enAmarilla)}></i></div>
			<div className="p-3 bg-warning shadow rounded-bottom"><i className={"fas fa-circle fa-5x " + Verde} onClick={() => Verde == "luzVerde" ? setVerde(enNegro) : setVerde(enVerde)} ></i></div>
			
			<div className="row shadow p-1 bg-light mt-2 ">
				<div className='col p-3'>
				{ ParaSemaforo ? (<i className="fas fa-stop fa-2x " onClick={() => paraSemaforo()} ></i>):(<i className="fas fa-play fa-2x " onClick={() => arrancaSemaforo()} ></i>)}
				</div>
				<div className='col p-3'>
				<i className="fas fa-plus fa-2x"></i>
				</div>
			</div> 
	</div>
	);
};

export default TrafficLight;
