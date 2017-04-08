import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0
    }
    this.update = this.update.bind(this);
  }
  update( e ){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
    })
  }
  render(){
    return (
      <div>
        <NumInput
         ref="red"
         min={0}
         max={255}
         step={1}
         val={+this.state.red}
         type="range"
         label="Red"
         update={this.update} />
      </div>
    );
  }
}

class NumInput extends React.Component {
  render(){
    let label = this.props.label !== '' ?
     <label>{this.props.label} - {this.props.val}</label> : ''
    return (
    <div>
      <input ref="inp"
        type={this.props.type}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        defaultValue={this.props.val}
        onChange={this.props.update} />
        {label}
    </div>
    );
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number'], ['range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default App

/********************************
 REACT NOTES
*********************************/

// BASIC STRUCTURE:

    // PROPERTIES:
            // "a collection of values that are meant to
            // be passed into our component as static values
            // that are not meant to be changed by our component"

    // STATE:
            // "a collection of values that are meant to be managed as well as updated by our component"

    // .CHILDREN:
            // "Access nested qualities of properties using the props.children method"

            // Props.children does not return the actual child, just a descriptor of the
            // children, so there is nothing to change. So in a situation where we would want to map over 
            // many children and change a property of each child, we would have to code around this fact
            // and use React.cloneElement() which would clone what is passed in(the child in this case)
            // which we would then have access to its properties

            // THIS.PROPS.CHILDREN:
              // Accessing children using this.props.children can be more complicated then
              // it seems, generating an error when there is only one child. To provide a
              // more "consistent experience", React developers made up a React.children method
              // which returns the children of a React(or maybe JSX??) element.

    // MAPPING:
            // There are many options regarding mapping. You can use .map(returns an Array), .forEach(no Array,
            // .toArray(returns flat array with keys assigned to each child)

            // Children.only returns a child if there is only one

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

// COMPOSITION VS INHERITANCE:
    // https://facebook.github.io/react/docs/composition-vs-inheritance.html
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



