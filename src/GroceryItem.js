import React, { Component } from 'react'
import Hone from './Hone';
import Hello from './Hello';


export class ListItem extends Component {

  render() {
    return (
      <li>
          {this.props.quantity} x {this.props.name}
          -------------------------------------------
          <Hone name={this.props.name}/>
      </li>
    )
  }
}

export default ListItem
