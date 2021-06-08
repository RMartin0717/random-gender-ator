import React, { Component } from 'react'
import './App.css'
import Form from '../Form/Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      currentGender: null
    }
  }

  render() {
    return (
      <>
        <h1>The Random Gender-ator</h1>
        <Form />
      </>
    )
  }
}

export default App
