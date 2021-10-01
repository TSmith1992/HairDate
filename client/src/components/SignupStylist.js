import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

function SignupStylist({ setCurrentUser }) {
  const history = useHistory();
  const [salons, setSalons] = useState('')
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [yearsActive, setYearsActive] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");
  const [salonId, setSalonId] = useState("");

  useEffect(() => {
    fetch(`/salons`)
      .then((r) => r.json())
      .then((r) => {
        setSalons(r);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/stylists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: passwordConfirmation,
        years_active: yearsActive,
        profile_pic: profilePic,
        description,
        salon_id: salonId
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push("/groups");
        });
      } else {
        // history.push("/signuptree");
        res.json().then((errors) => {
          console.log(errors)
          setErrors(errors);
        });
      }
    });
  }
  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
        <h1>Stylist Sign Up</h1>
        <p>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="profile_pic">Profile Picture:</label>
          <input
            type="profile_pic"
            name="profile_pic"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="years_active">When did you Start as a Stylist?</label>
          <input
            type="date"
            name="years_active"
            value={yearsActive}
            onChange={(e) => setYearsActive(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="description">
            What would you like potential Clients to know about you? Do you have hair preferences or specialties?
          </label>
          <p></p>
          <textarea
            type="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        {salons? salons.map(salon =>{ 
          return(<div key ={salon.name}>
            <h1>{salon.name}</h1>
            <img
            src="https://m.media-amazon.com/images/M/MV5BMTgxNTE0OTEzM15BMl5BanBnXkFtZTYwMjgwNzk2._V1_.jpg"
            alt="Salon"
            width="300px" 
            height="600px"
            />
            <div>
            <input
              type="checkbox"
              value={salon.id}
              onChange={e => setSalonId(e.target.value)}
              /> <strong>Click here to work with {salon.name}.</strong>
            </div>
              <h5>Address: {salon.address}</h5>
              <h5>Open Every Day from {salon.opening_hours} to {salon.closing_hours}. As a Stylist collaborating with them, you will only be able to accept appointments within these hours. </h5>
              <h5><em>{salon.description}</em></h5>
            </div>)
        })
        :<>Loading...</>}


        <p>
          {errors? <>{errors.errors.map(error => <strong key={error}><li>{error}</li></strong>)}</>:<></>}
        </p>
        <p>
          <button type="submit">Sign Up</button>
        </p>
        <p>-- or --</p>
        <p>
          <Link to="/">Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignupStylist;
