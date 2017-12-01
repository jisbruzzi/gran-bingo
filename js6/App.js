import ReactDOM from 'react-dom';
import React from 'react';
import {TablaBingo} from "./TablaBingo"
import {InputSalen} from "./InputSalen"

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            salieron:[1,8,27]
        }
    }
    render(){
        return <span>
            <TablaBingo salieron={this.state.salieron}/>
            <InputSalen onSalen={this.onSalen.bind(this)}/>
        </span>;
    }
    onSalen(salen){
        console.log(salen);
        this.setState({
            salieron:salen
        })
    }
} 