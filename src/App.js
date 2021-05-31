import React, {Component} from 'react';
import Table from './components/Table';
import Form from './components/Form';

class App extends Component
{
  state = {
    characters: []
  }

  removeData = (index) => {
    const {characters} = this.state;
    this.setState({
      characters: characters.filter((character, i) => i !== index)
    })
  }

  addCharacter = (character) => {
    const characters = this.state.characters;

    this.setState({
      characters: [...characters, character]
    })
  }

  render() {
    const {characters} = this.state;
    return (
      <div className="container">
        <h1>My Contact List</h1>
        <Table characterData={characters} removeData={this.removeData} />
        <Form addCharacter={this.addCharacter} />
      </div>
    );
  }
}

export default App;
