import React from "react";
import './StyledComponents/MyCSS.css'

export default function Homepage({ currentUser }) {

  return (
    <div className="authForm">
      {console.log("current User", currentUser)}

      <h1>Hi {currentUser.name}!</h1>
      <h3 className="Title">Find on this page some general information about you and your activities!</h3>
      <img
        src={currentUser.profile_pic}
        alt="Profile"
        width="300px"
        height="300px"
      />
      <h3>
        Number of Past Appointments:{" "}
        {
          currentUser.appointments.filter(
            (appointment) => appointment.accepted === true
          ).length
        }
      </h3>
      <h3>
        Number of Pending Appointments:{" "}
        {
          currentUser.appointments.filter(
            (appointment) => appointment.accepted !== true
          ).length
        }
      </h3>
      <h3>What You Would like Others to Know:</h3>
      <p>{currentUser.description}</p>
      {currentUser.hairstyle_pic ? (
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
        <div>
          <h3>
            Your Average Rating: <em>{currentUser.avg_rating}.00</em>
          </h3>
          <h1>The Salon: {currentUser.salon.name}</h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFGLIb5RfMOKCK49npBM0gEANk78PtpTkHQ&usqp=CAU"
            alt="Salon"
            width="300px"
            height="300px"
          />
          <p>{currentUser.salon.address}</p>
          <h3>Your Salon's opening hours: {new Date(currentUser.salon.opening_hours).toLocaleTimeString('en-US')}</h3>
          <h3>Your Salon's opening hours: {new Date(currentUser.salon.closing_hours).toLocaleTimeString('en-US')}</h3>
          <h3>
            <em>{currentUser.salon.description}</em>
          </h3>
          <h3>
            Salon Stylist Rating: <em>{currentUser.avg_rating_salon}.00</em>
          </h3>
        </div>
      )}
    </div>
  );
}
