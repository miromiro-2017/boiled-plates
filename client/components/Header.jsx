import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'><h1>Speacifik</h1></Link>
      <h2> South Pacific Lingo </h2>
      <h3>Speak anytime, anywhere!</h3>
      <h4>A fun and accessible way to learn Pacific Languages, so you can get to speaking in your day to day interactions!</h4>
      <div className='navBar'>
        <span>About</span>
        <span>Sign Up</span>
        <span>Sign In</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default Header
