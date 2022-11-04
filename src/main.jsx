import React from 'react';
import ReactDOM from 'react-dom/client';

import FirstApp from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
import './styles.css'
import  { Counter } from './Counter';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <HelloWorldApp/>
      {/* <FirstApp title='Soy Goku' subtitle={1325}/> */}
       <Counter value2={10}/>
    </React.StrictMode>
)