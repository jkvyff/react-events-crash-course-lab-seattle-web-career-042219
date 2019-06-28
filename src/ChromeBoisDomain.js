import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component { 
  
  handleMouseMove = (ev) => {
     this.onReceiveCoordinates([ev.clientX, ev.clientY]);
  }

  onReceiveCoordinates = mouseCoordinates => drawChromeBoiAtCoords(...mouseCoordinates)

  handleClick = (ev) => toggleCycling()

  handleKey = (ev) => {
    if (ev.key === 'a') {
      resize('+')
    } else if (ev.key === 's') {
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyUp={this.handleKey}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
