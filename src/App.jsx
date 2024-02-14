import { Component } from "react";

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      goodCount: 0,
      badCount: 0,
      neutralCount: 0,
    }
  }

  handleGoodClick = () => {
    this.setState((prevState) => ({
      goodCount: prevState.goodCount + 1,
    }))
  }

  handleBadClick = () => {
    this.setState((prevState) => ({
      badCount: prevState.badCount + 1,
    }))
  }

  handleNeutralClick = () => {
    this.setState((prevState) => ({
      neutralCount: prevState.neutralCount + 1,
    }))
  }

  handleResetClick = () => {
    this.setState({
      goodCount: 0,
      badCount: 0,
      neutralCount: 0,
    })
  }
  render(){
    return(
      <div>
        <h3>Give Feedback!</h3>
        <button onClick={this.handleGoodClick}>Good</button>
        <button onClick={this.handleBadClick}>Bad</button>
        <button onClick={this.handleNeutralClick}>Neutral</button>
        <h3>Statistics: </h3>
        <p>Good: {this.state.goodCount}</p>
        <p>Bad: {this.state.badCount}</p>
        <p>Neutral: {this.state.neutralCount}</p>
        <button onClick={this.handleResetClick}>Reset Feedbacks</button>
      </div>
    )
  }
}

export default App;