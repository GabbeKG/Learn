import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface NumberWizard {
    min: number;
    max: number;
    guess: number;
    textValue: string;
    
}
export class NW extends React.Component<RouteComponentProps<{}>, NumberWizard>{
 
    constructor() {
        super();
        this.state = {

            min: 0,
            max: 1000,
            
            guess: 0,
            textValue: ''
        };
       


    }
    componentDidMount() {
        const { min, max } = this.state
        this.setState({
            guess: min + max / 2
            
        })
    }
    public render() {
        return <div>
            <h1>NumberWizard</h1>
            <h1><p><strong>{this.state.textValue}</strong></p></h1>
            <p> Welcome to NumberWizard.</p>
            <p><h3>Think of a number between 1-1000 and i will try and guess that number.<br />
                If the guess is wrong, please tell me if it's higher or lower.<br />
                But if i'm correct than let me know!</h3></p>
            < p > Current guess: <strong>{Math.round(this.state.guess)} </strong></p>

            <button onClick={this.Higher.bind(this)}> Higher </button>
            <button onClick={this.Lower.bind(this)}>Lower</button>
            <button onClick={this.Correct}>Correct</button>
        </div>;
    }
    Higher() {
        const newMin = this.state.guess;
        const newGuess = (newMin + this.state.max) / 2;
        this.setState({
            min: newMin,
            guess: newGuess
            
            
            

        });
        
        

    }
    Lower() {
        const newMax = this.state.guess;
        const newGuess = (this.state.min + newMax) / 2;
        this.setState({
            max: newMax,

            guess: newGuess
            
        });
        
    }
    Correct=()=> {
        
        this.setState({
            textValue: 'I am a genius!'
            })
    }
}