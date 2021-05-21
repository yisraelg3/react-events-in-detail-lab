// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    coordinates = (event) => {
        const xyArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(xyArray)
    }
    
  render() {
    return (
      <button onClick={this.coordinates}/>
    )
  }
}
