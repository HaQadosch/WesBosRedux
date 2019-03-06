import React, { Component } from 'react'
import './App.css'
import { Main } from './components/Main'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <BrowserRouter >
        <Route path='/' component={Main} />
      </BrowserRouter>
    )
  }
}

export default App
