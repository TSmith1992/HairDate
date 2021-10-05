import React, { useState } from "react";
import ReviewInputs from "./ReviewInputs";

export default function PastAppt({ currentUser, appt }) {
  const [clicked, setClicked] = useState(false);
  // let startTime = appt.start_time;
  // .toLocaleTimeString('en-US')
  // debugger
  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;
  const apptDate = new Date(appt.date);
  const dateApt = `${
    apptDate.getMonth() + 1
  }/${apptDate.getDate()}/${apptDate.getFullYear()}`;

  // console.log("currentUser", currentUser);
  console.log("appt", appt);
  console.log("appt date comparison", dateApt < date);

  return (
    <div>
      <p>Appt date: {dateApt}</p>
      {appt.postcut_pic ? (
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
      ) : dateApt >= date ? (
        <>Once you've met with the Stylist, you may write a review.</>
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
