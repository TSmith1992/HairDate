import React from "react";
import './StyledComponents/MyCSS.css'

export default function PastAppt({ currentUser, appt }) {
  const apptDate = new Date(appt.date);
  const dateApt = `${
    apptDate.getMonth() + 1
  }/${apptDate.getDate()}/${apptDate.getFullYear()}`;

  return (
    <div className="stylistcard">
      <p><strong>Appt date:{dateApt}</strong></p>
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
            Your Review: <br></br><em><strong>{appt.review}</strong></em>
          </p>
          <p>
            Rating: <br></br><em>{appt.rating}</em>
          </p>
        </>
      ) : (
        <>Hold tight! The Client will write a review shortly </>
      )}
      <br></br>
    </div>
  );
}
