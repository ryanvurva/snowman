import React, { Component } from 'react'

class Reset extends Component {
  _reset = () => {
    this.props.reset()
  }
  render () {
    return (<button className='victory' onClick={this._reset}>START OVER</button>)
  }
}

export default Reset
