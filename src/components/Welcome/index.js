import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {cond: false}

  onSubscribe = () => {
    let {cond} = this.state
    if (cond === false) {
      cond = false
      ;<button className="button" type="button">
        Subscribe
      </button>
    } else {
      ;<button className="button" type="button">
        Subscribed
      </button>
    }
  }

  render() {
    return (
      <div className="bgContainer">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you Happy Learning</p>
        <div className="insideClass">
          <button className="button" type="button" onClick={this.onSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
