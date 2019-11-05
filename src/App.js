import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Alex', age: 40},
      {name: 'Kamil', age: 48},
      {name: 'Bruce', age: '??'}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Alex the GREAT';
    this.setState({
      persons: [
        {name: 'Alex', age: 21},
        {name: 'Kamil', age: 21},
        {name: 'Bruce', age: 21}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Make Alex Great Again</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: running</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Working now?'))
  }
}

export default App;
