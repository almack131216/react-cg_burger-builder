import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Alex", age: 40 },
      { name: "Kamil", age: 48 },
      { name: "Bruce", age: "??" }
    ],
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log('was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Alex the GREAT';
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: "Kamil", age: 21 },
        { name: "Bruce", age: 21 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Alex", age: 21 },
        { name: event.target.value, age: 21 },
        { name: "Bruce", age: 21 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, "Alex 3")}
          >
            My hobbies: running
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Make Alex Great Again</h1>
        <button style={style} onClick={() => this.switchNameHandler("Alex 2")}>
          Switch Name
        </button>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Working now?'))
  }
}

export default App;
