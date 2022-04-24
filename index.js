import React from 'react';
import {createRoot} from "react-dom/client";
// import App from './App';
import CounterApp from './CounterApp'
import "./styles.css"; //Import the css styles


const root = createRoot(document.getElementById('root'));
root.render(<CounterApp defaultValue={0}/>); 