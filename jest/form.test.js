import React from 'react'
import renderer from 'react-test-renderer'
import Form from '../src/Form/Form.js'
//add the following to package.json:
  // {
  //   "scripts": {
  //     "test": "jest"
  //   }
  // }

test('Should have a controlled input field for a vibe whose value reflects the data selected in the form', () => {
  $('form select[name="vibe"]').select('trash')
  expect($('form select[name="vibe"]').value()).toEqual('trash')
})
