import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: '',
    }
  }

  update( e ){
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
        .transform(code, {presets: ['es2015', 'react']})
        .code,
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }
  }
  render(){
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
          onChange={this.update.bind(this)}
          defaultValue={this.state.input}/>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default App

/********************************
 REACT NOTES
*********************************/

// BASIC STRUCTURE:

    // Properties:
            // "a collection of values that are meant to
            // be passed into our component as static values
            // that are not meant to be changed by our component"

    // State:
            // "a collection of values that are meant to be managed as well as updated by our component"

    // .children:
            // "Access nested qualities of properties using the props.children method"

// EVENT HANDLING:

    // Event handling can be done in React by attaching special functions to JSX-HTML elements(i.e. a textarea
    // tag like: <textarea
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
    // Updating is being handled by a method that is part of the parent Class
            // update( e ){
            //   this.setState({currentEvent: e.type})
            // }

// COMPONENT LIFECYCLE METHODS(i.e. componentWillMount ):
    // docs: https://facebook.github.io/react/docs/react-component.html

// FUNCTIONAL COMPONENTS VS. CLASS BASED COMPONENTS:

    // "Go with functional if your component doesn't do much more than take in some props and render."
    // "...They will always render and behave the same, given the same props."
    // "Also, they don't care about lifecycle methods or have their own internal state."
    // (taken from: http://stackoverflow.com/questions/36097965/react-when-to-use-es6-class-based-components-vs-functional-es6-components)

    // Bottom line:
            // Use Functional style for components that will only take in props and render,
            // Use Class Based style components that will need a state and require lifecycle methods.

// HIGHER ORDER COMPONENTS:

    // Use spread argument in regards to passing properties to Higher Order Components:
    // Link to more Info: http://stackoverflow.com/questions/28452358/what-is-the-meaning-of-this-props-in-reactjs
    // Higher Order Components are Components that take in other components as arguments.
    // They can be used to standardize component logic and thus make it more reusable.

/********************************
 HTML NOTES
*********************************/

// TAGS:
    // <pre></pre> tag can be used for preformatted text.

/********************************
CSS NOTES
*********************************/

// PROPERTIES:

    // LENGTH - VH/VW:
        // a unit of measuring length.
        // 1 vh = 1% height of the viewport.
        // 1 vw = 1% width of the viewport.

    // DISPLAY - FLEX:
        // can be used to let all flexible items be of the same length.
        // POSSIBLE USE: controlling growth of flexible elements like an update feed post or org design team?

// MISC: 

    // GROUPING ELEMENTS:
        // I would like to group properties by their type.
        // ref: https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/



