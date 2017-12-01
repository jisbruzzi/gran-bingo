import ReactDOM from 'react-dom';
import React from 'react';
import Popout from 'react-popout'

export function InputSalen(props){
    function onClosing(){
        console.log("ONCLOSING")
    }
    let value=""
    function onChange(event){
        value=event.target.value;
    }
    function onKeyDown(event){
        if(event.key=="Enter"){
            let values=value
                .replace(" ","")
                .split(",")
                .map((x)=>parseInt(x))
            props.onSalen(values)
        }
    }
    return <Popout title="ACA PONEN LOS NROS" onClosing={onClosing}>
        <input type="text" onChange={onChange} onKeyDown={onKeyDown}/>
    </Popout>

}