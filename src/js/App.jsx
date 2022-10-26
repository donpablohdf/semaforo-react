import React, { useState, useContext } from 'react';

import { Lucifer } from '../context/Lucifer.js'; //cargamos el contexto donde se manejan las variqables del semaforo

import CrearMagenta from './component/CrearMagenta.jsx';
import Parpadeo from '../services/Parpadeo.jsx';
import Semaforo from './component/Semaforo.jsx'
import PlayStop from './component/PlayStop.jsx';

const App = () => {

	return (
		<>
			{/* ************GRUPO SEMÁFORO Y CAJA DE CONTROL *********** */}
			<div className='container-fluid-md'>
				<Lucifer>
					{/* CAJA DE CONTROL DE SEMÁFORO Y CREACIÓN DE MAGENTA*/}
					<div>
						<div className="row  p-1  mb-2 ">
							<PlayStop />
							<Parpadeo />
							<CrearMagenta />
						</div>

					</div>
					{/* SEMAFORO */}
					<div className='bg-success p-3 rounded-pill '>
						<Semaforo />
					</div>
				</Lucifer>
			</div>

			{/* *******************INSTRUCCIONES Y BUGS*************************/}
			<div className='ms-5 border-danger border-3'>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Al pulsar sobre cualquier círculo cambia de su color correspondiente a negro y viceversa</li>
					<li className="list-group-item">Al pulsar sobre <i className="fas fa-plus"></i> crea un nuevo círculo negro, que al pulsar sobre él cambia a magenta y viceversa.<br />
						Al pulsar sobre <i className="fas fa-minus"></i> desaparece</li>
					<li className="list-group-item">Al pulsar sobre <i className="fas fa-play"></i> arranca el semáforo y cambia el estado del botón a <i className="fas fa-stop"></i> para poder pararlo.<br />
						Funciona tanto como si está el magenta como si no.  </li>
					<li className="list-group-item bg-danger text-center h2">DEPURAR</li>
					<li className="list-group-item bg-danger ">Hay que parar el semáforo al pulsar sobre <i className="fas fa-plus"></i> y <i className="fas fa-minus"></i> (está la variable pero no actua)</li>
					<li className="list-group-item bg-danger ">Arreglar intervalo del semáforo</li>
				</ul>
			</div>
		</>
	);
};

export default App;
