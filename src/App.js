import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  //Only available in class components 
  state = {
    persons: [
      {name: 'Max', age: 28}, 
      {name: 'Manu', age: 29}, 
      {name: 'Steph', age: 26}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person
          name={this.state.persons[0].name}       //refers to the class
          age="28"
        />
        <Person name="Manu" age="29">
          My hobbies: Racing
        </Person>

        <Person
          name="Steph"
          age="26"
        />

      </div>

    );
  }
}
export default App;
