import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  OnAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  OnApplyBrakes = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="app-container">
        <div className="speedometer-container">
          <h1 className="title">SPEEDOMETER</h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              className="image"
              alt="speedometer"
            />
          </div>
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="caption">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="button btn-blue"
              type="button"
              onClick={this.OnAccelerate}
            >
              Accelerate
            </button>
            <button
              className="button btn-transparent "
              type="button"
              onClick={this.OnApplyBrakes}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
