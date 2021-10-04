import React, { useState } from "react";
import ReviewInputs from "./ReviewInputs";

export default function PastAppt({ currentUser, appt }) {
  const [clicked, setClicked] = useState(false);
  let startTime = new Date(appt.start_time).getHours();
  // .toLocaleTimeString('en-US')
  console.log("currentUser", currentUser);
  console.log("appt", appt);

  return (
    <div>
      <p>Appt date:{appt.date}</p>
      <p>
        Appt Start Time :{appt.start_time}...{startTime}
      </p>
      <p>Appt End Time:{appt.end_time}</p>
      {currentUser.hairstyle_pic === false && appt.postcut_pic === false ? (
        <p>Hold Tight! The Client will write a review shortly!</p>
      ) : currentUser.hairstyle_pic && appt.postcut_pic ? (
        <>
          <p>The Do'</p>
          <img
            src={appt.postcut_pic}
            alt="Postcut"
            width="300px"
            height="300px"
          />
          <p>
            Your Review: <em>{appt.review}</em>
          </p>
          <p>
            Rating: <em>{appt.rating}</em>
          </p>
        </>
      ) : currentUser.hairstyle_pic === false && appt.postcut_pic ? (
        <>
          <p>The Do'</p>
          <img
            src={appt.postcut_pic}
            alt="Postcut"
            width="300px"
            height="300px"
          />
          <p>
            Your Review: <em>{appt.review}</em>
          </p>
          <p>
            Rating: <em>{appt.rating}</em>
          </p>
        </>
      ) : (
        <button name="Review" onClick={(e) => setClicked(true)}>
          Rate and Write a Review of the Appointment
        </button>
      )}

      {clicked ? <ReviewInputs currentUser={currentUser} appt={appt} /> : <></>}
      <br></br>
    </div>
  );
}
