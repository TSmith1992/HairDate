import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'

import SignupTree from './SignupTree'
import SignupStylist from './SignupStylist'
import SignupClient from './Signupclient'

function LoginTree({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signupTree">
        <SignupTree setCurrentUser={setCurrentUser}/>
      </Route>
      <Route exact path="/signupstylist">
        <SignupStylist setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signupclient">
        <SignupClient setCurrentUser={setCurrentUser} />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default LoginTree