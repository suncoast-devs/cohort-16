import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import AllParks from './pages/AllParks'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Hiking Trail Finder!</h1>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected-link">
                Go Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/parks" activeClassName="selected-link">
                All parks
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/trails" activeClassName="selected-link">
                All trails
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/parks" component={AllParks}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
