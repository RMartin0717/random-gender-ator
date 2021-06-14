import React, { Component } from 'react'
import Error from '../Error/Error'
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
    const { vibe, entity } = this.state
    if (vibe && entity) {
      this.props.updateGender(this.state.vibe, this.state.entity)
      this.setState({ error: null })
    } else {
      this.setState({ error: "Please select both a vibe and an entity"})
    }
  }

  render() {
    return (
      <>
        <form>
          <h3 className='content'>Home</h3>
          <h3 className='title content'>Select a vibe and an entity to create your own new gender!</h3>
          <div className='form-container'>
            <div className='selection-container'>
            <label htmlFor='vibe-select'>Choose a vibe:</label>
              <select name='vibe' id='vibe-select' onChange={e => this.handleChange(e)} className='vibe-select content'>
                <option value=''>--Please select a vibe--</option>
                <option value='trash'>Trash</option>
                <option value='sparkle'>Sparkle</option>
                <option value='sparkle-trash'>A Bit of Both</option>
              </select>
            </div>
            <div className='selection-container'>
              <label htmlFor='entity-select'>Choose an entity:</label>
              <select name='entity' id='entity-select' onChange={e => this.handleChange(e)} className='entity-select content'>
                <option value=''>--Please select an entity--</option>
                <option value='animal'>Animal</option>
                <option value='extraterrestrial'>Extraterrestrial</option>
                <option value='animal-extraterrestrial'>A Bit of Both</option>
              </select>
            </div>
            <button onClick={(event) => this.handleClick(event)} className='new-gender-btn content'>New Gender Please</button>
            {this.state.error &&
              <Error error={this.state.error} />
            }
          </div>
        </form>
      </>
    )
  }
}

export default Form
