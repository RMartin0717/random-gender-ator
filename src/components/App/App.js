import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import Form from '../Form/Form'
import Card from '../Card/Card'
import AllCards from '../AllCards/AllCards'
import Error from '../Error/Error'
import About from '../About/About'
import Footer from '../Footer/Footer'
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
    const { animal, extraterrestrial, trash, sparkle} = this.state
    if (!vibe || !entity) {
      return
    } else if (!animal || !extraterrestrial || !trash || !sparkle) {
      this.setState({ error: "Some data didn't make it. Try again later."})
    } else {
      const oneVibe = this.getAWord(vibe)
      const oneEntity = this.getAWord(entity)
      const id = Date.now()
      this.setState({ currentGender: { gender:`${oneVibe} ${oneEntity}`, id: id }})
    }
  }

  getAWord = (category) => {
    if (category.includes('-')) {
      const subCategories = category.split('-')

      const firstWord = this.state[subCategories[0]][this.getRandomIndex(0, this.state[subCategories[0]].length - 1)]

      const secondWord = this.state[subCategories[1]][this.getRandomIndex(0, this.state[subCategories[1]].length - 1)]

      return `${firstWord}-${secondWord}`
    } else if (this.state[category]) {
      const word = this.state[category][this.getRandomIndex(0, this.state[category].length - 1)]

      return word
    } else {
      this.setState({ error: "No word associations found. Come back later for more fresh-baked genders."})
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
      const fetchedAnimals = await getWords('animals');
      const cleanedAnimals = fetchedAnimals.map(animal => animal.word_association)
      this.setState({ animal: cleanedAnimals })

      const fetchedExtraterrestrials = await getWords('extraterrestrials');
      const cleanedExtraterrestrials = fetchedExtraterrestrials.map(extraterrestrial => extraterrestrial.word_association)
      this.setState({ extraterrestrial: cleanedExtraterrestrials })

      const fetchedSparkles = await getWords('sparkles');
      const cleanedSparkles = fetchedSparkles.map(sparkle => sparkle.word_association)
      this.setState({ sparkle: cleanedSparkles })

      const fetchedTrashes = await getWords('trashes');
      const cleanedTrashes = fetchedTrashes.map(trash => trash.word_association)
      this.setState({ trash: cleanedTrashes })
    } catch (error) {
      this.setState({error: "Failed to fetch words. Try again later."})
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
                <div className='main-page'>
                  <Form updateGender={this.updateGender} />
                  <Card
                    gender={this.state.currentGender}
                    saveGender={this.saveGender}
                    delGender={this.delGender}
                  />
                  {this.state.error &&
                    <Error error={this.state.error} />
                  }
                </div>
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
          <Route path='/about'>
            <About />
          </Route>
          <Route>
           <Error error={`Page not found. Click 'Home' to return to the main page.`} />
         </Route>
      </Switch>
      <Footer />
    </>
    )
  }
}

export default App
