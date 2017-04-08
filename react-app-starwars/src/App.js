import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    fetch( 'http://swapi.co/api/people/?format=json')
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}))
  }
  filter( e ){
    this.setState({filter: e.target.value})
  }

  render(){
    let items = this.state.items;
    if(this.state.filter){
      items = items.filter( item =>
        item.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    }
    return (
      <div>
      <input type="text"
      onChange={this.filter.bind(this)}/>
        {items.map(item => 
          <Person key={item.name} person={item} />)}
      </div>
    )
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default App

//  Properties - "a collection of values that are meant to
//         be passed into our component as static values
//         that are not meant to be changed by our component"
//
//  State      - "a collection of values that are meant to be managed as well as updated by our component"
//
//  .children  -  "Access nested qualities of properties using the props.children method"
//
//  React Synthetic Events: Can be attached to HTML elements such as textarea by adding a textarea JSX
//  tag like: <textarea
          // onKeyPress={this.update}
          // onCopy={this.update}
          // onCut={this.update}
          // onPaste={this.update}
          // onFocus={this.update}
          // onBlur={this.update}
          // onDoubleClick={this.update}
          // onTouchStart={this.update}
          // onTouchMove={this.update}
          // onTouchEnd={this.update}
          // cols="30" 
          // rows="10"
//  and their events are being handled by an update method
        // update( e ){
        //   this.setState({currentEvent: e.type})
        // }
//
// Component Lifecycle Methods https://facebook.github.io/react/docs/react-component.html
  // componentWillMount
  // componentDidMount
  // componentWillUnmount
//
// No curly brace template in String


