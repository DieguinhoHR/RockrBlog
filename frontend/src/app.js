import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { MainPage } from 'pages/main'
import { Post } from 'pages/post'

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
            <Route path='/contact' component={Post} />
            <Route path='/post/:post_id' component={Post} />
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    </>
  )
}

export default App
