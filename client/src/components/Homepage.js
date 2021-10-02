import React from "react";

export default function Homepage({ currentUser, isClient }) {
  return (
    <div>
      {console.log("current User", currentUser)}
      <h1>Hi {currentUser.name}!</h1>
      <h3>Find on this page some general information about your activities!</h3>
      <img
        src={currentUser.profile_pic}
        alt="Profile"
        width="300px"
        height="300px"
      />
      <h3>Number of Past Appointments: {currentUser.appointments.length}</h3>
      <h3>Number of Pending Appointments: {currentUser.appointments.length}</h3>
      <h3>What You Would like Others to Know:</h3> 
      <text>{currentUser.description}</text>
      {isClient? (
        <span>
          <h3>The look you're going for:</h3>
          <img
            src={currentUser.hairstyle_pic}
            alt="Profile"
            width="300px"
            height="300px"
          />
        </span>
      ) : (
        <>''</>
      )}
    </div>
  );
}
