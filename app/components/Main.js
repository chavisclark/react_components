import React, {Component} from 'react'
import '../styles/main.css'

export default class Main extends Component {
  render() {
    return (
      <div>
          {this.props.children}
      </div>

    )
  }
}