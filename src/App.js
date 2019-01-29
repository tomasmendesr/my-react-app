import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Pepe', age: 12 },
      { name: 'Fede', age: 32}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log("click");
    // DON'T DO THIS this.state.persons[0].name = "Peregrin";
    this.setState({
      persons: [
        { name: newName , age: 28 },
        { name: 'Pepe', age: 12 },
        { name: 'Fede', age: 32}
      ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max' , age: 28 },
        { name: event.target.value, age: 12 },
        { name: 'Fede', age: 32}
      ]})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map(person => {
              return <Person name={person.name} 
              age={person.age}/>
            })}
          </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app!!!'));
  }
}

export default App;
