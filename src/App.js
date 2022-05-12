import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
const App = () => {
  return (
   
      <Switch>
        <Route exact path="/">
            <Users />
        </Route>
        <Route path="/places/new">
            <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    
  )
}

export default App