import React from 'react'
import '../styles/main.css'

export default class Main extends React.Component {
  render() {
    return (
      <div>
          {this.props.children}
      </div>

    )
  }
}