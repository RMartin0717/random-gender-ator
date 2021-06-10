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
    const oneVibe = this.getAWord(vibe)
    const oneEntity = this.getAWord(entity)
    this.setState({ currentGender: `${oneVibe} ${oneEntity}`})
  }

  getAWord = (category) => {
    if (category === 'sparkle-trash') {
      const sparkleWord = this.state.sparkle[this.getRandomIndex(0, this.state.sparkle.length - 1)]
      const trashWord = this.state.trash[this.getRandomIndex(0, this.state.trash.length - 1)]
      return `${sparkleWord}-${trashWord}`
    }
    if (category === 'animal-extraterrestrial') {
      const animalWord = this.state.animal[this.getRandomIndex(0, this.state.animal.length - 1)]
      const extraterrestrialWord = this.state.extraterrestrial[this.getRandomIndex(0, this.state.extraterrestrial.length - 1)]
      return `${animalWord}-${extraterrestrialWord}`
    }
    const word = this.state[category][this.getRandomIndex(0, this.state[category].length - 1)]
    return word
  }

  getRandomIndex = (min, max) => {
     return Math.floor(Math.random() * (max - min + 1) + min);
  }

  componentDidMount = async () => {
    try {
      const fetchedAnimals = await getWords('animal');
      this.setState({ animal: fetchedAnimals.associations_array })

      const fetchedAliens = await getWords('extraterrestrial');
      this.setState({ extraterrestrial: fetchedAliens.associations_array })

      const fetchedSparkles = await getWords('sparkle');
      this.setState({ sparkle: fetchedSparkles.associations_array })

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
