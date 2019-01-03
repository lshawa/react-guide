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

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // this.state.persons[0].name = 'Maximillion'; DONT DO THIS
    this.setState({
      persons: [
        {name: newName, age: 28}, 
        {name: 'Manu', age: 29}, 
        {name: 'Steph', age: 27}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Maxamillion')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}       //refers to the class
          age={this.state.persons[0].age}
        />
        <Person 
           name={this.state.persons[1].name} 
           age={this.state.persons[1].age}
           click = {this.switchNameHandler.bind(this, 'MAX!')} > My hobbies: Racing
        </Person>

        <Person
          name={this.state.persons[2].name}       //refers to the class
          age={this.state.persons[2].age}
        />

      </div>

    );
  }
}
export default App;
