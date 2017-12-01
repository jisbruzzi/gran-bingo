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
        return <span>
            <div>
                <div style={{
                    display:"flex",
                    flexDirection:"row"
                }}>
                    <Webcam audio={false}/>
                    <TablaBingo salieron={this.state.salieron} style={{width:"45%",height: 0,paddingBottom:"100%"}}/>
                </div>
                <InputSalen onSalen={this.onSalen.bind(this)}/>
                <Ultimos salieron={this.state.salieron} />
            </div>
        </span>;
    }
    onSalen(salen){
        console.log(salen);
        this.setState({
            salieron:salen
        })
    }
} 