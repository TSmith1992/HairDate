import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./StyledComponents/MyCSS.css";

function SignupStylist({ setCurrentUser }) {
  const history = useHistory();
  const [salons, setSalons] = useState("");
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
        salon_id: salonId,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push("/homepage");
        });
      } else {
        res.json().then((errors) => {
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
          <br></br>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <br></br>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <br></br>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="profile_pic">Profile Picture:</label>
          <br></br>
          <input
            type="profile_pic"
            name="profile_pic"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="years_active">When did you Start as a Stylist?</label>
          <br></br>
          <input
            type="date"
            name="years_active"
            value={yearsActive}
            onChange={(e) => setYearsActive(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="description">
            What would you like potential Clients to know about you? Do you have
            hair preferences or specialties?
          </label>
          <br></br>
          <textarea
            type="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <label htmlFor="salon-choice">
          With which Salon would you like collaborate?
        </label>
        <div class="row">
          <div class="column">
            {salons ? (
              salons.map((salon) => {
                return (
                  <div key={salon.name} className="Card">
                    <h1>{salon.name}</h1>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFGLIb5RfMOKCK49npBM0gEANk78PtpTkHQ&usqp=CAU"
                      alt="Salon"
                      width="300px"
                      height="600px"
                    />
                    <div>
                      <input
                        type="checkbox"
                        value={salon.id}
                        onChange={(e) => setSalonId(e.target.value)}
                      />
                      <strong>Click here to work with {salon.name}.</strong>
                    </div>
                    <h5>Address: {salon.address}</h5>
                    <h5>
                      Open Every Day from {salon.opening_hours} to
                      {salon.closing_hours}. As a Stylist collaborating with
                      them, you will only be able to accept appointments within
                      these hours.
                    </h5>
                    <h5>
                      <em>{salon.description}</em>
                    </h5>
                  </div>
                );
              })
            ) : (
              <>Loading...</>
            )}
          </div>
        </div>

        <p>
          {errors ? (
            <>
              {errors.errors.map((error) => (
                <strong key={error}>
                  <li style={{ color: "red" }}>{error}</li>
                </strong>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
        <p>
          <button type="submit" className="login">
            Sign Up
          </button>
        </p>
        <p>-- or --</p>
        <button className="login">
          <Link to="/" class="Links">
            Log In
          </Link>
        </button>
      </form>
    </div>
  );
}

export default SignupStylist;
