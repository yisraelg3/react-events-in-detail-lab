// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleClick = (event)=> {
        event.persist()
        const xyArray = [event.clientX, event.clientY]
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

  render() {
    return (
      <button onClick={this.handleClick}/>
    )
  }
}
