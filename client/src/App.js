import React, { useState, useEffect } from 'react'
import AuthenticatedApp from './components/AuthenticatedApp'
import LoginTree from './components/LoginTree'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
            if (user.hairstyle_pic){
              setIsClient(true)
            }
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])

  if(!authChecked) { return <div></div>}
  return (
    <Router>
      {currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            isClient={isClient}
          />
        ) : (
          <LoginTree
            setCurrentUser={setCurrentUser}
          />
        )
      }
    </Router>
  )
}

export default App