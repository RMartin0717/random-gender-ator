import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: []
    }
  }

  render() {
    return (
      <h1>The Random Gender-ator</h1>
    )
  }
}

export default App
