import React from "react";
import PastAppt from "./PastAppt";
import './StyledComponents/MyCSS.css'

export default function PastAppointment({ currentUser }) {
  return (
    <div className="container">
      Past Appointment Page!
      {currentUser.appointments
        .filter((appointment) => appointment.accepted)
        .map((appt) => (
          <PastAppt appt={appt} key={appt.id} currentUser={currentUser} />
        ))}
    </div>
  );
}
