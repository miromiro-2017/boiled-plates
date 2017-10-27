import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SingleScenario = (props) => {
  return (
    <div className='languageOpt'>
      <Link to={`/scenarios/${props.scenario.id}/phrases`}>
        <img id='images' />
        <p>{props.scenario.scenario}</p>
      </Link>

    </div>
  )
}

export default connect()(SingleScenario)
