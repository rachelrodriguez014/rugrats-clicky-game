import React, { Component } from "react";
import "./gameCard.css";

class GameCard extends Component {
    render() {
        return (
            <div className="card" key={this.props.id} data-id={this.props.id} onClick={() => { this.props.cardShuffle(this.props.char); this.props.scoreTracker(this.props.id) }}>
                <div className="img-container">
                    <img src={this.props.image} alt={this.props.name} />
                </div>
            </div>
        );
    };
};

export default GameCard;
