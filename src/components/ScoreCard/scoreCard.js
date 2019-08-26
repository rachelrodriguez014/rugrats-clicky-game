import React, { Component } from "react";
import "./scoreCard.css";

const startMessage = <h3 className="font-weight-bold">Click on any image below to start the game!</h3>

const correctGuess = <h3 className="font-weight-bold">You guessed correct!!!!</h3>;

const wrongGuess = <h3 className="font-weight-bold">Sorry!! You guessed wrong!!</h3>

class ScoreCard extends Component {
    render() {
        return (
            <div className="mainCard">
                <span className="navbar-text message">
                    {(this.props.score === 0 && this.props.topScore === 0) ? startMessage
                        : this.props.score > 0 ? correctGuess : wrongGuess}
                </span>
                <br></br>
                <span className="navbar-text score">Score: {this.props.score} | Top Score: {this.props.TopScore} </span>
            </div>
        );
    };
};

export default ScoreCard;