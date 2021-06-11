import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import Form from '../Form/Form'
import Card from '../Card/Card'
import AllCards from '../AllCards/AllCards'
import Error from '../Error/Error'
import { Route, Switch } from 'react-router-dom'
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
    if (this.state.genders.find(gender => gender.id === newGender.id)) {
        return
    } else {
      this.setState({ genders: [...this.state.genders, newGender]})
      localStorage.setItem('genders', JSON.stringify([...this.state.genders, newGender]));
    }
  }

  delGender = (id) => {
    const removeGender = this.state.genders.filter(gender => {
      return gender.id !== id
    })
    this.setState({ genders: removeGender })
    localStorage.setItem('genders', JSON.stringify(removeGender));
  }

  updateGender = (vibe, entity) => {
    if (!vibe || !entity) {
      return
    }
    const oneVibe = this.getAWord(vibe)
    const oneEntity = this.getAWord(entity)
    const id = Date.now()
    this.setState({ currentGender: { gender:`${oneVibe} ${oneEntity}`, id: id }})
  }

  getAWord = (category) => {
    if (category.includes('-')) {
      const subCategories = category.split('-')

      const firstWord = this.state[subCategories[0]][this.getRandomIndex(0, this.state[subCategories[0]].length - 1)]

      const secondWord = this.state[subCategories[1]][this.getRandomIndex(0, this.state[subCategories[1]].length - 1)]

      return `${firstWord}-${secondWord}`
    } else {
      const word = this.state[category][this.getRandomIndex(0, this.state[category].length - 1)]

      return word
    }
  }

  getRandomIndex = (min, max) => {
     return Math.floor(Math.random() * (max - min + 1) + min);
  }

  createID = () => {
    const id = Date.now()
    return id
  }

  componentDidMount = async () => {
    if (JSON.parse(localStorage.getItem('genders'))) {
      const storedGenders = JSON.parse(localStorage.getItem('genders'))
      this.setState({ genders: storedGenders })
    }
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
        <Header />
        <Switch>
          <Route
            exact path='/'
            render={() => {
              return (
                <>
                  <h3>Home</h3>
                  <Form updateGender={this.updateGender}/>
                  <Card
                    gender={this.state.currentGender}
                    id={this.state.currentGender}
                    saveGender={this.saveGender}
                    delGender={this.delGender}
                  />
                </>
              )
            }}
          />
          <Route path='/savedgenders'>
            <AllCards
              genders={this.state.genders}
              saveGender={this.saveGender}
              delGender={this.delGender}
            />
          </Route>
          <Route>
           <Error error={`Page not found. Click 'Home' to return to the main page.`} />
         </Route>
      </Switch>
    </>
    )
  }
}

export default App
