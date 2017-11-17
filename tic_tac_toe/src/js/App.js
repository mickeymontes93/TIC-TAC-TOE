import React, { Component } from 'react';
import '../css/App.css';
import Board from './Board';
import TurnTopBar from './TurnTopBar'
import Result from './Result'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      currentTurn : 'X',
      showBoard : true,
      resultMessage : ''
    }
  }

  reset(self)
  {
    self.setState({
      currentTurn : 'X',
      showBoard : true,
      resultMessage : ''
    })
  }

  setCurrentTurn (self, nextTurn)
  {
    self.setState({currentTurn: nextTurn})
  }

  showResult(self, result)
  {
    var resultMessage = ""
    switch (result) {
      case 1:
        resultMessage = "The winner is player 1"
        break
      case 2:
        resultMessage = "The winner is player 2"
        break
      case 3:
        resultMessage = "Draw"
        break
      default:
        resultMessage = ""
    }
    console.log(resultMessage);
    self.setState({
      showBoard:false,
      resultMessage: resultMessage
    })
  }

  render()
  {
    return (
      <div className = "app">
        <div className= "title">
          <h1 className="title-text"> TIC - TAC - TOE</h1>
        </div>
        <div className = "content">
          {this.state.showBoard && <TurnTopBar currentTurn = {this.state.currentTurn}/>}
          {this.state.showBoard && <Board parent = {this} setCurrentTurn={this.setCurrentTurn} showResult={this.showResult}/>}
          {!this.state.showBoard && <Result parent = {this} message ={this.state.resultMessage} reset={this.reset}/>}
        </div>
      </div>
    );
  }
}

export default App;
