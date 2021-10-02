import React from "react";

export default function Homepage({ currentUser }) {
  return (
    <div>
      <h1>Hi {currentUser.name}!</h1>
      <h3>Find on this page some general information about your activities!</h3>
      <img
        src=${currentUser.profilePic}
        alt="Profile"
        width="300px"
        height="600px"
      />
    </div>
  );
}
