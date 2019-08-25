// Code SimpleComponent Here
import React, { Component } from 'React'

class SimpleComponent extends Component {

    state = {
        mood: `happy`
    }

    handleClick = () => {
        let mood = `happy`
        if (this.state.mood === `happy`){
            mood = 'sad'
        } 
        this.setState({
            mood: mood
        })
    }

    render() {
        return <div onClick={ this.handleClick }>{this.state.mood}</div>
    }
}

export default SimpleComponent