import React from "react";

export default function PastAppt({ currentUser, appt }) {
  const apptDate = new Date(appt.date);
  const dateApt = `${
    apptDate.getMonth() + 1
  }/${apptDate.getDate()}/${apptDate.getFullYear()}`;

  return (
    <div>
      <p>Appt date:{dateApt}</p>
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
      ) : (
        <>Hold tight! The Client will write a review shortly </>
      )}
      <br></br>
    </div>
  );
}
