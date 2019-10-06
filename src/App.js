import React, { Component, Fragment } from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'

class App extends Component {
  render() {
    return (
      <Fragment>
          <Navbar/>
          <BookList/>
          <Details/>
          <Cart/>
          <Default/>
      </Fragment>
    )
  }
}

export default App
