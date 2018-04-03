import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../HOC/withClass.js';
import Aux from '../../../HOC/Aux.js';

class Person extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    if(this.props.position === 0) {
      this.inputElement.focus();      
    }
  }
  render() {
    return (
      <Aux>
        <p onClick={this.props.cick}>My name is {this.props.name} and I am {this.props.age} years old. {this.props.children}</p>
        <input
          ref={(inp) => {this.inputElement = inp}}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);