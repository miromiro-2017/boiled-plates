import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Sound from 'react-sound'

class SinglePhrase extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playSound: false,
      playSlow: false
    }
  }
  startSound () {
    this.setState({playSound: true})
    setTimeout(this.stopSound.bind(this), 6500)
  }
  stopSound () {
    this.setState({playSound: false})
  }

  startSoundSlow () {
    this.setState({ playSlow: true })
    setTimeout(this.stopSoundSlow.bind(this), 6500)
  }

  stopSoundSlow () {
    this.setState({ playSlow: false })
  }

  render () {
    return (
      <div>
      <div className='scenario'>
        <p id='pac-phrase'>{this.props.phrase.samoanPhrase}</p>
        <p id='eng-phrase'>({this.props.phrase.phrase})</p>
        
          {this.state.playSound && <Sound
            url={this.props.phrase.soundFile}
            playStatus={Sound.status.PLAYING}
            playFromPosition={0 /* in milliseconds */}
          />}

          {this.state.playSlow && <Sound
            url={this.props.phrase.soundFileSlow}
            playStatus={Sound.status.PLAYING}
            playFromPosition={0 /* in milliseconds */}
          />}
        </div>
          
            <button onClick={this.startSound.bind(this)}>Listen</button>
            <button onClick={this.startSoundSlow.bind(this)}>Slow</button>
      </div>
    )
  }
}

export default connect()(SinglePhrase)
