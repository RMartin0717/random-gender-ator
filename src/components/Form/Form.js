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
            <option value='trash'>Trash</option>
            <option value='sparkle'>Sparkle</option>
          </select>
          <label for='entity-select'>Choose an entity:</label>
          <select name='vibes' id='entity-select'>
            <option value=''>--Please select an entity--</option>
            <option value='trash'>Animal</option>
            <option value='sparkle'>Extraterrestrial</option>
          </select>
          <button>New Gender Please</button>
        </form>
      </>
    )
  }
}

export default Form
