import React, { useState, useContext } from 'react';

import { Lucifer } from '../../context/Lucifer.js';

import CrearMagenta from './CrearMagenta.jsx';
import Parpadeo from './Parpadeo.jsx';
import Semaforo from './Semaforo.jsx'
import PlayStop from './PlayStop.jsx';

const TrafficLight = () => {
	return (
		<>		
			<Lucifer>
				<PlayStop />
				<Parpadeo tipo= "luzAmarilla" delay1= {333} delay2= {666} />
				<CrearMagenta />
				<Semaforo />
			</Lucifer>
					
		</>
	);
};

export default TrafficLight;
