import React, { Component } from 'react';
import styles from './Vote.module.css';



class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = { numberOfVotes: 0 }
    }

    incrementVotes = () => {
        let newAmountOfVotes =  this.state.numberOfVotes + 1;
        this.setState({
            numberOfVotes:newAmountOfVotes
        })
        this.props.onIncrement(newAmountOfVotes, this.props);
    }
    render() {
        return (
            <div className={styles.container} onClick={this.incrementVotes}>
                <div>{this.props.name}</div>
                <div>{this.state.numberOfVotes}</div>
            </div>
        );
    }
}

export default Vote;