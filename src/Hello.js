import React, { Component } from 'react'

export class Hello extends Component {
  render() {
      var place = this.props.name;

    return (
       <h1> Hello !  {place} </h1>
    )
  }
}

export default Hello
