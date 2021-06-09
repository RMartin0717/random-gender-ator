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
      const fetchedAnimals = await getWords('animal');
      this.setState({ animals: fetchedAnimals.associations_array })

      const fetchedAliens = await getWords('extraterrestrial');
      this.setState({ extraterrestrials: fetchedAliens.associations_array })

      const fetchedSparkles = await getWords('sparkle');
      this.setState({ sparkles: fetchedSparkles.associations_array })

      const fetchedTrash = await getWords('trash');
      this.setState({ trash: fetchedTrash.associations_array })
    } catch (error) {
      this.setState({error: "No words found."})
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
