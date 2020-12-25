import React from 'react'

import './App.css';
import './UserOutput/UserOutput';
import UserOutput from './UserOutput/UserOutput';

class App extends React.Component {
  state = {
    names: ['Bruce Wayne', 'Kelvin Clark', 'Obiwan Kenobi']
  }

  nameChangeHandler = (event, index) => {
    let newNames = [...this.state.names];
    newNames[index] = event.target.value;

    this.setState({
      names: newNames
    })
  }

  render() {
    let users = this.state.names;

    return (
      <div className="App">
        {users.map((name, index) => {
          return (
            <UserOutput
              key={index}
              userName={name}
              index={index}
              changed={this.nameChangeHandler} />
          );
        })}
      </div>
    );
  }
}

export default App;
