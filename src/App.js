
import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Vote from './components/Vote';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trumpVotes: 0,
      bidenVotes: 0
    }
  }

  votes = (numberOfVotes, candidate) => {
    if (candidate == "Trump") {
      this.setState({
        trumpVotes: numberOfVotes
      })
    } else {
      this.setState({
        bidenVotes: numberOfVotes
      })
    }
  }

  state = {}
  render() {
    return (<div className="App">

      <div>    <h1> Total Votes: {this.state.bidenVotes + this.state.trumpVotes}</h1>  </div>
      <div className="voteContainer">

        <Vote name="Trump" onIncrement={this.votes} />
        <Vote name="Biden" onIncrement={this.votes} />
      </div>

    </div>);
  }
}



export default App;
