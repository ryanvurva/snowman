import React, { Component } from 'react'

class Reset extends Component {
  _reset = () => {
    this.props.reset()
  }
  render () {
    return (<div className='victory'><button className='reset' onClick={this._reset}>START OVER</button></div>)
  }
}

export default Reset
