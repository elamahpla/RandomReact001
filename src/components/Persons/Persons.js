import React, { Component }from 'react';
import Person from './Person/Person.js';

class Persons extends Component {
  render() {
    return this.props.persons.map((person, index) => {
      return <Person
        clicked={() => this.props.clicked(index)}
        name={person.name}
        position={index}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    })
  }
}

export default Persons;