import React from 'react'
import './Footer.css'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-content'>
      <p className='resources'>If you are in need of resources for trans, nonbinary, or intersex people and happen to live near Denver, Colorado
        <a href='https://docs.google.com/document/d/1Z-3PS8O3W_WuYJaRB29mIpKZ-MU9JB3iuolazm1POKE/edit?usp=sharing'> here is a doc </a>
      to some resources and supports.
      </p>
      <div className='github-link'>
        <FaGithub />
        <a href="https://github.com/RMartin0717">Riley Martin</a>
      </div>
    </div>
  )
}

export default Footer
