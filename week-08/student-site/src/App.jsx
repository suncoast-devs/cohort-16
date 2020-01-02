import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Student from './pages/Student'
import NewStudent from './pages/NewStudent'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/student/new" component={NewStudent}></Route>
        <Route exact path="/student/:id" component={Student}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
      <footer>
        <h1>Welcome to my SPA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/student/new">Create Student</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </Router>
  )
}

export default App
