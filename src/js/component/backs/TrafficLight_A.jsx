import React, { useState, useContext } from 'react';
import CrearMagenta from './CreaMagneta.jsx';
import TresColores from './TresColores.jsx';
import LucesContext from './LucesContext.js';
import LucesContext_B from '../../context/LucesContext';


const variables={ enRoja: "luzRoja", enAmarilla: "luzAmarilla", enVerde: "luzVerde", enMagenta: "luzMagenta", enNegro: "luzNegra", creaMG: false, paraSemaforo: false}

const TrafficLight = () => {

//declaramos las variables
	const [Roja, setRoja] = useState(variables.enNegro);
	const [Amarilla, setAmarilla] = useState(variables.enNegro);
	const [Verde, setVerde] = useState(variables.enNegro);
	// //nuevo circulo magenta
	// const [Magenta, setMagenta] = useState(enMagenta);
	const [creaMG, setMG]= useState(variables.creaMG);
	// //control de semaforo
	const [ParaSemaforo, setPara]= useState(variables.paraSemaforo);
	
// // movimiento de luces
	
// 	const cuatroColores = () =>{
		
// 		IDintervalo = setInterval(() => {
// 			setRoja(enRoja);
// 			setAmarilla(enNegro);
// 			setVerde(enNegro);
// 			setMagenta(enNegro);
			
// 			setTimeout(()=>{
// 				setRoja(enNegro);
// 				setAmarilla(enAmarilla);
// 				setVerde(enNegro);
// 				setMagenta(enNegro);
// 			}, 333);	
// 			setTimeout(()=>{
// 				setRoja(enNegro);
// 				setAmarilla(enNegro);
// 				setVerde(enVerde);
// 				setMagenta(enNegro);
// 			}, 666);
// 			setTimeout(()=>{
// 				setRoja(enNegro);
// 				setAmarilla(enNegro);
// 				setVerde(enNegro);
// 				setMagenta(enMagenta);
// 			}, 999);
// 		}, 1332);
// 		setTimeout(() => {
// 			setRoja(enRoja);
// 		}, 1005);
// 	}
// //todos a negro
// 	const todosNegro= () =>{
// 		setMagenta(enNegro);
// 		setRoja(enNegro);
// 		setAmarilla(enNegro);
// 		setVerde(enNegro);
// 	}

// //control del semaforo
// 	const arrancaSemaforo = () =>{
		
// 		if(!ParaSemaforo && !creaMG){ setTimeout(() => {
// 			tresColores();			
// 		}, 50); }

// 		if(!ParaSemaforo && creaMG) { setTimeout(() => {
// 			cuatroColores();			
// 		}, 50); }
// 		setPara(true);
// 		todosNegro();
// 	}
	

// 	const pararSemaforo= () =>{		
		
// 		setPara(false);
// 		clearInterval(IDintervalo);
// 		IDintervalo=false;
// 		setTimeout(() => {
// 			todosNegro();
// 		}, 250);
		
		
// 	}
// ************************** J S X ***************************	
	return (
		<>
		<LucesContext.Provider value={variables}>
		{/* GRUPO SEMÁFORO Y CAJA DE CONTROL */}
			<div>
				
{/* CAJA DE CONTROL DE SEMÁFORO Y CREACIÓN DE MAGENTA*/}
					<div>
						
						<div className="row  p-1  mb-2 ">
							<LucesContext_B value={variables}>
								<TresColores />
								<CrearMagenta />
							</LucesContext_B>
						</div>
						
					</div>

{/* SEMAFORO */}
					<div className='bg-success p-3 rounded-pill '>
						<div>
							{/* luces roja, amarilla y verde */}
							<div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
								<i 
									className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + Roja} 
									onClick={() => Roja == "luzRoja" ? setRoja(enNegro) : setRoja(enRoja)}
								></i>
							</div>
							{/* luz amarilla */}
							<div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
								<i 
									className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + Amarilla} 
									onClick={() => Amarilla == "luzAmarilla" ? setAmarilla(enNegro) : setAmarilla(enAmarilla)}
								></i>
							</div>
							{/* luz verde */}
							<div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
								<i 
									className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + Verde} 
									onClick={() => Verde == "luzVerde" ? setVerde(enNegro) : setVerde(enVerde)}
								></i>
							</div>

							{/* crea o mata magenta según el botón */}
							{ //si pulsamos el botón de crear magenta crea el nuevo elemento 
							creaMG ? ( 
								<div className="row p-3 bg-warning rounded-circle m-2 border border-dark border-2">
									<i 
									className={"fas fa-circle fa-5x rounded-circle border border-success border-3 " + Magenta} 
									onClick={
										//se puede cambiar el color de magenta a negro y viceversa al pulsar sobre él
										() => Magenta == "luzMagenta" ? setMagenta(enNegro) 
										: setMagenta(enMagenta)
									}>
									</i>
								</div>
							) 
							// si pulsamos el botón de eliminar magenta	crea un fragmento vacío		
							: (<></>)}
						</div>
					</div>
			</div>
					
{/* INSTRUCCIONES Y BUGS*/}
			<div className='ms-5 border-danger border-3'>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Al pulsar sobre cualquier círculo cambia de negro a su color correspondiente y viceversa</li>
					<li className="list-group-item">Al pulsar sobre <i className="fas fa-plus"></i> crea un nuevo círculo negro, que al pulsar sobre él cambia a magenta y viceversa.<br/> 
					Al pulsar sobre <i className="fas fa-minus"></i> desaparece</li>
					<li className="list-group-item">Al pulsar sobre <i className="fas fa-play"></i> arranca el semáforo y cambia el estado del botón a <i className="fas fa-stop"></i> para poder pararlo.<br/>
					Funciona tanto como si está el magenta como si no.  </li>
					<li className="list-group-item bg-danger text-center h2">DEPURAR</li>
					<li className="list-group-item bg-danger ">Hay que parar el semáforo al pulsar sobre <i className="fas fa-plus"></i> </li>
					<li className="list-group-item bg-danger ">No se elimina bien el intervalo al pulsar en <i className="fas fa-stop"></i><br/>He usado un settimeout en paraSemaforo</li>
				</ul>
			</div>
		</LucesContext.Provider>
		</>
	);
};

export default TrafficLight;
