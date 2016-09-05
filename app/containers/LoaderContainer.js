import React from 'react'
import Loader from '../components/Loader'

export default class LoaderContainer extends React.Component {
  render() {
    const data = {
      size: 200
    };
    return <Loader {...data} />
  }
}