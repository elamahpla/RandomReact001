import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit.js';
import Aux from '../HOC/Aux.js';
import withClass from '../HOC/withClass.js';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Joey', age: 28 },
      { id: '2', name: 'MK', age: 34 },
      { id: '3', name: 'Mizz Kat', age: 9 }
    ],
    showPersons: false,
    toggleClicked: 0
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pIndex => {
      return pIndex.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }
  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
