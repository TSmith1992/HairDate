import React from "react";
import PastApptStylist from './PastApptStylist'
import './StyledComponents/MyCSS.css'

export default function PastAppointmentStylist({currentUser}) {
  return (
    <div className='container'>
      Past Appointments Page!
      {currentUser.appointments
        .filter((appointment) => appointment.accepted)
        .map((appt) => (
          <PastApptStylist appt={appt} key={appt.id} currentUser={currentUser} />
        ))}
    </div>
  );
}
