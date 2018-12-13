import React, { Component } from 'react'; 
/*we need to make TimerApp a React component with an export, so that React can understand what is happening.*/

export default class TimerApp extends Component {
    constructor(props){
        super(props);
        this.state = {secondsElapsed: 0}
    }
    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }
    componentDidMount(){
        this.intervale = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
        console.log(this.interval);
    }
    render() {
        return (
            <div>
                <h1 className="section-title">React Timer</h1>
                <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
            </div>
        );
    }
}
