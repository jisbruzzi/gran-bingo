import ReactDOM from 'react-dom';
import React from 'react';
import {TablaBingo} from "./TablaBingo"
import {InputSalen} from "./InputSalen"
import {Ultimos} from "./Ultimos"
import Webcam from 'react-webcam';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            salieron:[1,8,27]
        }
    }
    render(){
        
        return <div id="App">
                <img src="img/titulo.png" /> 
                <div style={{
                    display:"flex",
                    flexDirection:"row"
                }} id="arriba">
                    
                    <div id="Webcam">
                        <Webcam audio={false} style={{width:"100%",height:"100%"}}/>
                    </div>
                    <div id="TablaBingo">
                        <TablaBingo salieron={this.state.salieron} />
                    </div>
                </div>
                <InputSalen onSalen={this.onSalen.bind(this)}/>
                <div id="abajo">
                    <Ultimos salieron={this.state.salieron}/>
                </div>
            </div>;
    }
    onSalen(salen){
        console.log(salen);
        this.setState({
            salieron:salen
        })
    }
} 