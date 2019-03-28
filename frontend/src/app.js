import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { MainPage } from 'pages/main'
import { Contact } from 'pages/contact'
import { CssBaseline } from '@material-ui/core'
import Nav from 'pages/templates/nav'

function App () {
  return (
    <>
      <CssBaseline>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path='/' component={MainPage} exact />
            <Route path='/contact' component={Contact} />
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    </>
  )
}

export default App
