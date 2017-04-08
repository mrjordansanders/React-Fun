import React from 'react';

const HOC = (InnerComponent) => class extends React.Component {
  constructor(){
    super();
    this.state = {count: 0}
  }
  update(){
    this.setState({count: this.state.count + 1})
  }
  componentWillMount(){
    console.log('HOC will mount')
  }
  render(){
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update.bind(this)}
      />
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <Button>button</Button>
        <hr />
        <LabelHOC>label</LabelHOC>
      </div>
    )
  }
}

const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends React.Component {
  componentWillMount(){
    console.log('label will mount')
  }

  render(){
    return (
      <label onMouseMove={this.props.update}>
      {this.props.children} - {this.props.count}
      </label>
    )
  }
}

const LabelHOC = HOC(Label)

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
//
// spread argument in regards to passing properties to Higher Order Components:
// Link to more Info: http://stackoverflow.com/questions/28452358/what-is-the-meaning-of-this-props-in-reactjs
// Higher Order Components are Components that take in other components as arguments.
// They can be used to standardize component logic and thus make it more reusable.


