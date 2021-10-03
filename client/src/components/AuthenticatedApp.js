import { Switch, Route, NavLink, useHistory } from 'react-router-dom'
import Homepage from './Homepage'
import ProfileEdit from './ProfileEdit'
import PastAppointment from './PastAppointment'
import PendingAppointments from './PendingAppointments'
import BookAppointment from './BookAppointment'

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
          <NavLink to="/homepage">HomePage</NavLink>
          <NavLink to="/profileedit">Edit Your Profile!</NavLink>
          <NavLink to="/pastappt">Past Appointments</NavLink>
          <NavLink to="/pendappt">Pending Appointments</NavLink>
          {isClient? 
          <NavLink to="/bookappt">Book an Appointment</NavLink>
          :<></>}
        </span>
        <span>Logged in as <strong>{currentUser.name}</strong> 
        <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <Switch>
        <Route exact path="/homepage">
          <Homepage 
          currentUser={currentUser}
          isClient={isClient}/>
        </Route>
        <Route exact path="/profileedit">
          <ProfileEdit 
          currentUser={currentUser}
          isClient={isClient}
          setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/pastappt">
          <PastAppointment 
          currentUser={currentUser}
          isClient={isClient}
           />
        </Route>
        <Route exact path="/pendappt">
          <PendingAppointments 
          currentUser={currentUser}
          isClient={isClient}
           />
        </Route>
        <Route exact path="/bookappt">
          <BookAppointment 
          currentUser={currentUser}
          isClient={isClient}
           />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;
