import React from 'react'
import {Route} from 'react-router'
import Main from '../components/Main.js'
import Home from '../components/Home.js'
import LoaderContainer from '../containers/LoaderContainer'
import ModalContainer from '../containers/ModalContainer'

const routes = (
  <Route component={Main}>
    <Route path='/' component={Home}/>
    <Route path='/react_components' component={Home} />
    <Route path='/loader' component={LoaderContainer}/>
    <Route path='/modal' component={ModalContainer}/>
  </Route>
)

export default routes
