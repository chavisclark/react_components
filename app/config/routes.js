import React from 'react'
import {Route} from 'react-router'
import Main from '../components/Main.js'
import Home from '../components/Home.js'
import LoaderContainer from '../containers/LoaderContainer.js'

module.exports = (
  <Route component={Main}>
    <Route path='/' component={Home}/>
    <Route path='/loader' component={LoaderContainer}/>
  </Route>
)

