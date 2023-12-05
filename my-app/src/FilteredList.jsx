import React, { Component } from 'react'; import List from './List'; 
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class FilteredList extends Component { 
 constructor(props) { 
 super(props); 
 // The state is just a list of key/value pair (like a hashmap)
 this.state = { 
search: ""
 }; 
 } 
 // Sets the state whenever the user types on the search bar 

 onSearch=
 
 (event) => { 
    this.setState({search: event.target.value.trim().toLowerCase()}); 
    }

 filterItem = (item) => { 
 // Checks if the current search term is contained in this item
 return item.name.toLowerCase().search(this.state.search) !== -1; 
 } 
 render() { 
 return ( 
 <div className="filter-list">
 <h1>Produce Search</h1> 
 
 <DropdownButton id = "typeDropdown" title = {"Produce Type"}>
    <Dropdown.Item eventKey="all" onSelect={this.onFilter}>All</Dropdown.Item>
    <Dropdown.Item eventKey="fruit" onSelect={this.onFilter}>Fruit</Dropdown.Item>
    <Dropdown.Item eventKey="vegetable" onSelect={this.onFilter}>Vegetable</Dropdown.Item>
    
</DropdownButton>

<input type="text" placeholder="Search" onChange={this.onSearch} /> 
 <List items={this.props.items.filter(this.filterItem)} />

 </div> 
 ); 
 } 
} 
 
export default FilteredList