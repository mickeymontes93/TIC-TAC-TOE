import React, { Component } from 'react';
import '../css/TurnTopBar.css';

class TurnTopBar extends Component
{
  render()
  {
    return(
      <div className ='turnTopBar'>
        <h1 className = 'player-turn'>
          PLAYER{'\''}S {this.props.currentTurn} TURN
        </h1>
      </div>
    );
  }
}

export default TurnTopBar;
