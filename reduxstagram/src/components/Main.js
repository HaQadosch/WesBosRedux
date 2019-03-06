import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './../styles/style.css'
import { PhotoGrid } from './PhotoGrid'
import { Single } from './Single'

export class Main extends React.Component {
  render () {
    return (
      <div>
        <h1><Link to='/'>ReduxStagram</Link></h1>
        <Switch>
          <Route exact path='/view/:postId' component={Single} />
          <Route component={PhotoGrid} />
        </Switch>
      </div>
    )
  }
}
