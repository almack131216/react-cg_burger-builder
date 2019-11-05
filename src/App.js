import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Alex', age: 40},
      {name: 'Kamil', age: 48},
      {name: 'Bruce', age: '??'}
    ]
  });

  const [otherState, setOtherState] = useState({otherState: 'some other value?'});

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Alex the GREAT';
    setPersonsState({
      persons: [
        {name: 'Alex', age: 21},
        {name: 'Kamil', age: 21},
        {name: 'Bruce', age: 21}
      ],
      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Make Alex Great Again</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobbies: running</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Working now?'))
}

export default app;

