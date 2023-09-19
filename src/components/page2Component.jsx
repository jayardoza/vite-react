import React, {Component} from 'react';
import {render} from 'react-dom';
import Component3 from "./nonPageComponent.jsx"

class Page2 extends Component {
    constructor(){
        super();
        this.state={
            sampleString : "Matthew"
        }
    }


componentDidMount(){

}

componentWillUnmount() {

}

render(){
    return (
        <div>
            <center>
                <h1> {this.state.sampleString}</h1>
                <Component3/>
            </center>
        </div>
    );
}

}

export default Page2;