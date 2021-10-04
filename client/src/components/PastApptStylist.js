import React, { useState } from "react";

export default function PastAppt({ currentUser, appt }) {
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
      ) : <>Hold tight! The Client will review the date shortly </>}
      <br></br>
    </div>
  );
}
