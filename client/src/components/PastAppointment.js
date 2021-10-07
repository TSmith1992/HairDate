import React from "react";
import PastAppt from "./PastAppt";
import './StyledComponents/MyCSS.css'

export default function PastAppointment({ currentUser }) {
  return (
    <div className="pending">
      Past Appointment Page!
      <div className='pendingCard'>{currentUser.appointments
        .filter((appointment) => appointment.accepted)
        .map((appt) => (
          <PastAppt appt={appt} key={appt.id} currentUser={currentUser} />
        ))}</div>
    </div>
  );
}
