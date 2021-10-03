import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function StylistProfileEdit({ setCurrentUser, currentUser }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");

  function keepCurrent(e) {
    alert(`I'll keep my ${e.target.name}!`);
    if (e.target.name === "Name"){
        setName(currentUser.name)
    }else if (e.target.name === "password"){
        setPassword(currentUser.password)
    }else if (e.target.name === "password_confirmation"){
        setPasswordConfirmation(currentUser.password)
    }else if (e.target.name === "profile_pic"){
        setProfilePic(currentUser.profile_pic)
    }else if (e.target.name === "description"){
        setDescription(currentUser.description)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/stylists/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: passwordConfirmation,
        profile_pic: profilePic,
        description,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push("/homepage");
        });
      } else {
        res.json().then((errors) => {
          console.log(errors);
          setErrors(errors);
        });
      }
    });
  }
  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
        <h1>
          Stylist Profile Edit. Click the Checkbox next to the editing space to
          keep your old data
        </h1>
        <p>
          <label htmlFor="name">
            Your current name is <strong>{currentUser.name}</strong>. Change
            that in the space provided.
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="checkbox"
            name="Name"
            value="currentUser.name"
            onChange={keepCurrent}
          ></input>
        </p>
        <p>
          <label htmlFor="password">Change your Password here:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="checkbox"
            name="password"
            value="currentUser.password"
            onChange={keepCurrent}
          ></input>
        </p>
        <p>
          <label htmlFor="password_confirmation">
            Confrim your changed password here:
          </label>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <input
            type="checkbox"
            name="password confirmation"
            value="currentUser.password"
            onChange={keepCurrent}
          ></input>
        </p>
        <p>
          <label htmlFor="profile_pic">Change Your Profile Picture here:</label>
          <input
            type="profile_pic"
            name="profile_pic"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
          <input
            type="checkbox"
            name="profile_pic"
            value="currentUser.profile_pic"
            onChange={keepCurrent}
          ></input>
        </p>
        <p>
          <label htmlFor="description">
            What would you like for your potential Clients to know about you?
          </label>
          <p></p>
          <textarea
            type="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="checkbox"
            name="description"
            value="currentUser.description"
            onChange={keepCurrent}
          ></input>
        </p>
        <p>
          {errors ? (
            <>
              {errors.errors.map((error) => (
                <strong key={error}>
                  <li>{error}</li>
                </strong>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
        <p>
          <button type="submit">Confirm Changes</button>
        </p>
      </form>
    </div>
  );
}

export default StylistProfileEdit;
