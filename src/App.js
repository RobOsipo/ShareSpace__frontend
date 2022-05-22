import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
const App = () => {
  
  return (
   <>
    <MainNavigation />
    <main>
      <Switch>
        <Route exact path="/">
            <Users />
        </Route>
        <Route exact path="/:userId/places">
            <UserPlaces />
        </Route>
        <Route exact path="/places/new">
            <NewPlace />
        </Route>
        <Route path="/places/:placeId">
            <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>

   </>
    
  )
}

export default App