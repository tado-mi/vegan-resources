import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { sections } from './constants.js'

import { Page } from './pages/Page'

import './sass/App.scss'

export class App extends Component {
  render () {
    const menu = sections.map(({ path, title }) => {
      return (
        <li key={path}>
          <a href={`#/${path}`}>{title.en}</a>
        </li>
      )
    })

    const routes = sections.map(item => {
      return (
        <Route
          exact path={`/${item.path}`} key={`/${item.path}`}
          component={() => <Page {...item} />}
        />
      )
    })

    return (
      <div>
        <div className='menu'>
          <ul>
            {menu}
          </ul>
        </div>
        <Router>
          <Switch>
            {routes}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
