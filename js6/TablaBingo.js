import ReactDOM from 'react-dom';
import React from 'react';

export function TablaBingo(props){
    //return <span>tabla</span>
    let armada=[];
    for(let d=0;d<9;d++){
        let fila=[]
        let nrosFila=[];
        for(let u=0;u<10;u++){
            let n=d*10+u+1;
            nrosFila.push(n);
            if(props.salieron.includes(n)){
                fila.push(<td key={n} className="casillero salio">{n}</td>)
            }else{
                fila.push(<td key={n} className="casillero noSalio">{n}</td>)
            }
        }
        armada.push(<tr key={nrosFila}>{fila}</tr>);
    }
    
    return <div style={{width:"100%",height:"100%"}}>
        <table width="100%" height="100%">
            <tbody>
                {armada}
            </tbody>
        </table>
    </div>
}