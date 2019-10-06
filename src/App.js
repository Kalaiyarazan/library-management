import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from 'react-router-dom'
import Navigationbar from './components/Navigationbar'
import BookList from './components/BookList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'

class App extends Component {
  render() {
    return (
      <Fragment>
          <Navigationbar/>
          <Switch> 
            <Route exact path="/" component={BookList}/>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>
            <Route component={Default}/>
            <Default/>
          </Switch>
      </Fragment>
    )
  }
}

export default App
