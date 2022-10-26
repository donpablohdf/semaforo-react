import React, { useState, useContext } from 'react';

import { Lucifer } from '../../context/Lucifer.js';

import CrearMagenta from './CrearMagenta.jsx';
import Parpadeo from './Parpadeo.jsx';
import Semaforo from './Semaforo.jsx'
import PlayStop from './PlayStop.jsx';
import { useTimeout } from 'usehooks-ts';

const TrafficLight = () => {
	return (
		<>		
			<Lucifer>
				<PlayStop />
				<Parpadeo tipo= "luzRoja" delay1= {333} delay2= {666} />
				<Parpadeo tipo= "luzAmarilla" delay1= {666} delay2= {999} />
				<Parpadeo tipo= "luzVerde" delay1= {999} delay2= {1332} />
				<CrearMagenta />
				<Semaforo />
			</Lucifer>
					
		</>
	);
};

export default TrafficLight;
