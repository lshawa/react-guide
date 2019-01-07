import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  //Only available in class components 
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steph', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Steph', age: 26 }
      ]
    })
  }

  // delete a person from array of persons
 deletePersonHandler = (personIndex) => {
    // const persons =   this.state.persons;       //get persons from my state. we get a pointer to the original state
    const persons = [...this.state.persons];                        //set persons equal to a new array and this new array can use the spread operator
    persons.splice(personIndex, 1);             //this is a bad practice (index, how many you want to delete)
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
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
        <div >
          {/* Outputting a list by mapping an array into an array with jsx elemhts  */}
          {this.state.persons.map((person, index) => {
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              // click = {() => this.deletePersonHandler.bind(this.index)}
              name ={person.name}
              age ={person.age}/>
          })}
         
        </div>
      ); 
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {/* { this.state.showPersons ? //ternary expression */}
       
        {/* </div> : null
          } */}
        {persons}
      </div>

    );
  }
}
export default App;
