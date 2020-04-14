import React from 'react'

export default class SimpleComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            mood:"happy"
        };
    }

    toggleClass() {
        const currentState = this.state.mood;
        if(currentState === "happy") {
            this.setState({ mood:"sad" });
        } 
        else {
            this.setState({ mood:"happy" });
        } 
    };

    render() {
        return (
            <div onClick={() => this.toggleClass()}>{this.state.mood}</div>
        )
    }

}
