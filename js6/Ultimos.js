import ReactDOM from 'react-dom';
import React from 'react';
import {NumeroDesplazante} from "./NumeroDesplazante.js"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export function Ultimos(props){
    let numeros=props.salieron.map((n)=>{
        //return <div>{n}</div>
        return <NumeroDesplazante key={n} numero={n}/>
        
    })
    return <ReactCSSTransitionGroup 
    
    transitionName="numeros"
    transitionEnterTimeout={250}
    transitionLeaveTimeout={250}
    id="ultimos" style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center"
    }}
    >

    
    
        
        {numeros}
    
        
    
    </ReactCSSTransitionGroup>
    
}