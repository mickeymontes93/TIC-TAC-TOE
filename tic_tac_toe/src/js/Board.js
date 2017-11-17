import React, { Component } from 'react';
import '../css/Board.css';

class Board extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      PLAYER_ONE_SIMBOL: 'X',
      PLAYER_TWO_SIMBOL: 'O',
      currentTurn: 'X',
      board: ["", "", "", "", "", "", "", "", ""],
      currentTurnNumber :0,
      totalTurnsNumber : 9
    }
  }

  checkForWinner()
  {
    var boardState = this.state.board
    var winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    var result = 0;
    for (var i = 0; i < winningCombos.length; i++) {
      var combo = winningCombos[i]
      if(boardState[combo[0]] !== "" && boardState[combo[0]] === boardState[combo[1]] && boardState[combo[1]] === boardState[combo[2]])
      {
        switch (boardState[combo[0]]) {
          case this.state.PLAYER_ONE_SIMBOL:
            result = 1
            break
          default:
            result = 2
            break
        }
      }
    }

    if(this.state.currentTurnNumber === this.state.totalTurnsNumber)
    {
      result = 3
    }

    if(result !== 0)
    {
      this.props.showResult(this.props.parent, result);
    }
  }

  handleClick(index)
  {
    var boardState = this.state.board
    if(boardState[index] === "")
    {
      boardState[index] = this.state.currentTurn;
      this.setState({
        board: boardState,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SIMBOL? this.state.PLAYER_TWO_SIMBOL : this.state.PLAYER_ONE_SIMBOL,
        currentTurnNumber: this.state.currentTurnNumber+1
      },
      () => {
        this.props.setCurrentTurn(this.props.parent, this.state.currentTurn);
        this.checkForWinner();
      })
    }
  }

  render()
  {
    return (
      <div className="board">
        {this.state.board.map((square, index) => {
          return <div key={index} onClick={() => this.handleClick(index)} className="square">{square}</div>;
        })}
      </div>
    );
  }

}

export default Board;
