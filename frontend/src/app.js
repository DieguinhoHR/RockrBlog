import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { MainPage } from './pages/main'
import { Contact } from './pages/contact'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={MainPage} exact />
      <Route path='/contact' component={Contact} />
    </Switch>
  </BrowserRouter>
)

export default App
