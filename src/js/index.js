import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/index.css";

import App from "./App.jsx";

console.clear()

const rootNode = document.getElementById('app');
ReactDOM.render(<React.StrictMode>
    <App />
 </React.StrictMode>, rootNode);
