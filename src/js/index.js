import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/index.css";

import TrafficLight from "./component/TrafficLight.jsx";

console.clear()

const rootNode = document.getElementById('app');
ReactDOM.render(<React.StrictMode>
    <TrafficLight />
 </React.StrictMode>, rootNode);
