import React, { Component } from "react";
// import "./scoreCard.css";

const startMessage = "Click on any image below to start the game!"

const correctGuess = <p className="text-danger font-weight-bold text-uppercase">You guessed correct!!!!</p>;

const wrongGuess = <p className="text-danger font-weight-bold text-uppercase">Sorry!! You guess wrong!!!! Try again!!!</p>

class ScoreCard extends Component {
    render() {
        return (
            <div className="navbar fixed-top navbar-dark bg-primary">
                <span className="navbar-text logo">
                    Rugrats Clicky Game
                </span>
                <span className="navbar-text message">
                    {(this.props.score === 0 && this.props.topScore === 0) ? startMessage
                        : this.props.score > 0 ? correctGuess : wrongGuess}
                </span>
                <span className="navbar-text score">Score: {this.props.score} | Top Score: {this.props.TopScore} </span>

            </div>
        );
    };
};

export default ScoreCard;