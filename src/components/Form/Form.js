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

  render() {
    return (
      <>
        <form>
          <label for='vibe-select'>Choose a vibe:</label>
          <select name='vibes' id='vibe-select'>
            <option value=''>--Please select a vibe--</option>
            <option value='trash'>Sparkle</option>
            <option value='sparkle'>Trash</option>
            <option value='sparkle-trash'>A Bit of Both</option>
          </select>
          <label for='entity-select'>Choose an entity:</label>
          <select name='vibes' id='entity-select'>
            <option value=''>--Please select an entity--</option>
            <option value='animal'>Animal</option>
            <option value='extraterrestrial'>Extraterrestrial</option>
            <option value='animal-extraterrestrial'>A Bit of Both</option>
          </select>
          <button>New Gender Please</button>
        </form>
      </>
    )
  }
}

export default Form
