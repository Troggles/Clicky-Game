import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/wrapper";
import Score from "./components/Score";
import pups from "./cards.json";
import './App.css';

class App extends Component {
  state = {
    pups,
    clickedPuppyIds: [],
    score: 0, 
    goal: 8,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedPuppyIds = this.state.clickedPuppyIds;

    if(clickedPuppyIds.includes(id)) {
      this.setState({ clickedPuppyIds: [], score: 0, status: "Game Over!"});
      return;
    } else {
      clickedPuppyIds.push(id)

      if(clickedPuppyIds.length === 8) {
        this.setState({score: 8, status: "You Are A Winner", clickedPuppyIds: [] });
        console.log("You're Mind is a Steel Trap!");
        return;
      }

      this.setState({ pups, clickedPuppyIds, score: clickedPuppyIds.length, status: " "}); 

      for (let i = pups.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pups[i], pups[j]] = [pups[j], pups[i]];
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1 className="App-title">The Clickster</h1>
          <p className="App-Intro">
            Your Task: Don't click the same image twice  
          </p>
        </header>
        <Score total={this.state.score}
                goal={8}
                status={this.state.status}
        />
        <Wrapper>
          {this.state.pups.map(puppy => (
            <Card
            shuffleScoreCard={this.shuffleScoreCard}
            id={puppy.id}
            key={puppy.id}
            image={puppy.image}
          />
          ))}
        </Wrapper>
        
      </div>
    );
  }
}

export default App;
