import { Switch, Route, NavLink, useHistory } from 'react-router-dom'
import Homepage from './Homepage'
import ProfileEdit from './ProfileEdit'

function AuthenticatedApp({ currentUser, setCurrentUser, isClient }) {
  const history = useHistory()
  
  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          history.push('/')
        }
      })
  }

  return (
    <div className="App">
      <nav>
        <span>
          <NavLink to="/homepage">HomePage</NavLink>{" - "}
          <NavLink to="/profileedit">Edit Your Profile!</NavLink>
        </span>
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <Switch>
        <Route path="/homepage">
          <Homepage 
          currentUser={currentUser}
          isClient={isClient}/>
        </Route>
        <Route path="/profileedit">
          <ProfileEdit 
          currentUser={currentUser}
          isClient={isClient}
          setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;
