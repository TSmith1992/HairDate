import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function SignupClient({ setCurrentUser }) {
  const history = useHistory()
  // const [client, setClient] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const [hairStylePic, setHairStylePic] = useState('')
  const [description, setDescription] = useState('')

  
  function handleSubmit(e){
    e.preventDefault()
    fetch('/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: passwordConfirmation,
        hairstyle_pic : hairStylePic,
        profile_pic : profilePic,
        description
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/groups')
          })
        } else {
          setCurrentUser({ name: "Dakota" })
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
        <h1>Client Sign Up</h1>
        <p>
          <label 
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <p>
          <label 
            htmlFor="profile_pic"
          >
            Profile Picture
          </label>
          <input
            type="profile_pic"
            name="profile_pic"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="hairstyle_pic"
          >
            Preferred Hairstyle:
          </label>
          <input
            type="hairstyle_pic"
            name="hairstyle_pic"
            value={hairStylePic}
            onChange={(e) => setHairStylePic(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="description"
          >
            What would you like for your Stylist to know about you?
          </label>
          <input
            type="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <p><button type="submit">Sign Up</button></p>
        <p>-- or --</p>
        <p><Link to="/">Log In</Link></p>
      </form>
    </div>
  )
}

export default SignupClient
