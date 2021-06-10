import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vibe: null,
      entity: null
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.updateGender(this.state.vibe, this.state.entity)
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor='vibe-select'>Choose a vibe:</label>
          <select name='vibe' id='vibe-select' onChange={e => this.handleChange(e)}>
            <option value=''>--Please select a vibe--</option>
            <option value='trash'>Trash</option>
            <option value='sparkle'>Sparkle</option>
            <option value='sparkle-trash'>A Bit of Both</option>
          </select>
          <label htmlFor='entity-select'>Choose an entity:</label>
          <select name='entity' id='entity-select' onChange={e => this.handleChange(e)}>
            <option value=''>--Please select an entity--</option>
            <option value='animal'>Animal</option>
            <option value='extraterrestrial'>Extraterrestrial</option>
            <option value='animal-extraterrestrial'>A Bit of Both</option>
          </select>
          <button onClick={(event) => this.handleClick(event)}>New Gender Please</button>
        </form>
      </>
    )
  }
}

export default Form
