import React, { Component } from 'react'
import './App.css'
import Form from '../Form/Form'
// import { getWords } from '../../utilities/APICalls'

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

  render() {
    return (
      <>
        <h1>The Random Gender-ator</h1>
        <Form updateGender={this.updateGender}/>
      </>
    )
  }
}

export default App
