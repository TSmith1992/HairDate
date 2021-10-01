import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function SignupStylist({ setCurrentUser }) {
  const history = useHistory()
  const [stylist, setStylist] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function stylistOrClient(e){
    e.preventDefault()
    if (e.target.name !='stylist'){
      setStylist(true)
    // } elsif (e.target.name =='client'){
    //   setStylist(false)
     }
    console.log(e.target.name)




  }
  
  function handleSubmit(e){
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/groups')
          })
        } else {
          setCurrentUser({ username: "Dakota" })
          history.push('/groups')
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>
          <label 
            htmlFor="username"
          >
            Username STYLIST
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="password_confirmation"
          >
            Password Confirmation
          </label>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </p>
        <button name="stylist" onClick={stylistOrClient}>I am registering as a Stylist</button> 
        <button name="client" onClick={stylistOrClient}>I am registering as a Client</button>
        {/* {setStylist? 
        <>stylist</>:<>client</>
        } */}
        <p><button type="submit">Sign Up</button></p>
        <p>-- or --</p>
        <p><Link to="/">Log In</Link></p>
      </form>
    </div>
  )
}

export default SignupStylist
