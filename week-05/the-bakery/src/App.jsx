import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import PiePage from './components/PiePage'
import CookiesPage from './components/CookiesPage'
import CakesPage from './components/CakesPage'
import NavBar from './components/NavBar'
import TestComponent from './components/TestComponent'
import BakedGoods from './components/BakedGoods'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:category" component={BakedGoods}></Route>
          {/* <Route exact path="/pies" component={PiePage}></Route>
          <Route exact path="/cookies" component={CookiesPage}></Route>
          <Route exact path="/cakes" component={CakesPage}></Route> */}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
