import React, { Component } from 'react';

import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

import './App.css';

class App extends Component {

  state = ( 
    {
      userName: [
        { name: 'Adlan', age: 43 },
        { name: 'Jane', age: 33 },
        { name: 'John', age: 30 }
      ]
    });


    switchNameHandler = (newName) => {
    
    this.setState(
      {
        userName: [
          { name: newName, age: 43 },
          { name: 'Jane', age: 33 },
          { name: 'John', age: 30 }
        ]
      }
    )};

    nameChangeHandler = (event) => {
      this.setState(
        {
          userName: [
            { name: "Adlan", age: 43 },
            { name: event.target.value, age: 33 },
            { name: 'John', age: 30 }
          ]
        }
      )};
    
    render () {

      const style = {
        color: 'red'
      }

      return (
    <div className="App">
      <UserInput
       
        change={this.nameChangeHandler}
        name={this.state.userName[1].name}
      />
      <UserOutput
        click={this.switchNameHandler.bind(this,'MagnificentFiasco')}
        name={this.state.userName[0].name}
        age={this.state.userName[0].age}
        > Hobbies: Coding 
      </UserOutput>

      <UserOutput
        name={this.state.userName[1].name}
        age={this.state.userName[1].age} 
      />

      <UserOutput
        name={this.state.userName[2].name}
        age={this.state.userName[2].age}
      />

      <ol>
        {/* <li>Create TWO new components: UserInput and UserOutput</li>
        <li>UserInput should hold an input element, UserOutput two paragraphs</li>
        <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
        <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
        <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li> */}
        {/* <li>Add a method to manipulate the state (=> an event-handler method)</li> */}
        {/* <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li> */}
        {/* <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li> */}
        {/* <li style={style}>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
        <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li> */}
      </ol>
    </div>
    );
  }
}
    

export default App;

