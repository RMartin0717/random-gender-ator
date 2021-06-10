import React, { Component } from 'react'
import './App.css'
import Form from '../Form/Form'
import Card from '../Card/Card'
import { getWords } from '../../utilities/APICalls'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      currentGender: null
    }
  }

  saveGender = (gender, id) => {
    const newGender = { gender: gender, id: id }
    this.setState({ genders: [...this.state.genders, newGender]})
  }

  delGender = (id) => {
    console.log('delete')
  }

  updateGender = (vibe, entity) => {
    const oneVibe = this.getAWord(vibe)
    const oneEntity = this.getAWord(entity)
    this.setState({ currentGender: `${oneVibe} ${oneEntity}`})
  }

  getAWord = (category) => {
    if (category.includes('-')) {
      const subCategories = category.split('-')

      const firstWord = this.state[subCategories[0]][this.getRandomIndex(0, this.state[subCategories[0]].length - 1)]

      const secondWord = this.state[subCategories[1]][this.getRandomIndex(0, this.state[subCategories[1]].length - 1)]

      return `${firstWord}-${secondWord}`
    }
    const word = this.state[category][this.getRandomIndex(0, this.state[category].length - 1)]

    return word
  }

  getRandomIndex = (min, max) => {
     return Math.floor(Math.random() * (max - min + 1) + min);
  }

  createID = () => {
    const id = Date.now()
    return id
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
        <Card
          gender={this.state.currentGender}
          id={this.createID()}
          saveGender={this.saveGender}
          delGender={this.delGender}
        />
      </>
    )
  }
}

export default App
