import React, { Component } from 'react';
import '../css/Result.css';

class Result extends Component
{
  render()
  {
    return(
      <div className ='Result'>
          <div className = 'ResultMessage'>
            {this.props.message}
          </div>
          <div className = 'ResetButtonArea'>
            <button className='ResetButton' onClick={() => this.props.reset(this.props.parent)}>reset</button>
          </div>
      </div>
    );
  }
}

export default Result;
