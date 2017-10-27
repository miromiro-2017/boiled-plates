import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { fetchLanguages } from '../actions/languages'
import { connect } from 'react-redux'

import Languages from './LanguageComp/Languages.jsx'

class Home extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchLanguages())
  }

  render () {
    return (
      <div className='container'>
      
        <Languages />

      </div>
    )
  }
}

export default connect()(Home)
