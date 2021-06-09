import React, { Component } from 'react'
import './App.css'
import Form from '../Form/Form'
import { getWords } from '../../utilities/APICalls'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      currentGender: null
    }
  }

  updateGender = (vibe, entity) => {
    this.setState({ currentGender: `${vibe} ${entity}`})
  }

  componentDidMount = async () => {
    try {
      const fetchedWords = await getWords('animal');
      this.setState({ animals: fetchedWords.associations_array })
    } catch (error) {
      this.setState({error: "No animals found."})
    }
  }

  render() {
    return (
      <>
        <h1>The Random Gender-ator</h1>
        <Form updateGender={this.updateGender}/>
        {this.state.currentGender &&
          <h2>{this.state.currentGender}</h2>
        }
      </>
    )
  }
}

export default App
