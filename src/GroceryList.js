import React, { Component } from 'react'
import ListItem from './GroceryItem';
// import PropTypes from 'prop-types'

export class GroceryList extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      
        <ul>
             <ListItem quantity="1" name="Bread" > BRENDA </ListItem>
             <ListItem quantity="1" name="Miles" > MILES </ListItem>
             <ListItem quantity="1" name="Millet" > PLASCON </ListItem> 
             
        </ul>
       
    )
  }
}

export default GroceryList
