import React from 'react'
import { Link } from 'react-router-dom'
import './../styles/style.css'

export class Main extends React.Component {
  render () {
    return (
      <div>
        <h1><Link to='/'>ReduxStagram</Link></h1>
      </div>
    )
  }
}
