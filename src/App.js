import React, { Component } from 'react';
import './App.css';

// Import child components
import Header from "./components/Header/header";
import GameCard from "./components/GameCard/gameCard";
import ScoreCard from "./components/ScoreCard/scoreCard";
import characters from "./characters.json"

// Main app component
class App extends Component {
  // set state varibales for active gameplay
  state = {
    characters,
    score: 0,
    topScore: 0,
    topScoreArray: [],
    clicked: []
  };

  // Automatically shuffle the cards in a random order when the page first loads
  compoenentDidMount() {
    this.cardShuffle(this.state.characters)
  }

  // Function to set up the random automatic card shuffle 
  cardShuffle = arr => {

    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    this.setState({ arr });
  };

  // Function that will keep track of score and top score
  scoreTracker = (id) => {
    this.setState(prevState => ({ clicked: [...prevState.clicked], id }));

    // Check to see if card is already in clicked array, if not then add one to the score, push new score to top score, and push picture to clicked array

    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({
        score: this.state.score + 1,
        topScoreArray: this.state.topScoreArray.concat(this.state.score + 1)
      })
    }
    else {
      this.setState({ score: 0, clicked: [] });
    };
  };

  render() {
    return (
      <div>
        <Header>Rugrats Clicky Game</Header>

        <ScoreCard
          score={this.state.score}
          topScore={this.state.topScore} />

        <div className="container">
          {this.state.characters.map(char => (
            <GameCard
              cardShuffle={this.cardShuffle}
              id={char.id}
              key={char.id}
              name={char.name}
              image={char.image}
              char={characters}
              scoreTracker={this.scoreTracker} />
          ))}
        </div>
      </div>
    );
  };
};

export default App;

