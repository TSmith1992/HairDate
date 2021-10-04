import React from "react";
import PastApptStylist from './PastApptStylist'

export default function PastAppointmentStylist({currentUser}) {
  return (
    <div>
      Hi! I'm the Past Appointment Page FOR STYLISTS!
      {currentUser.appointments
        .filter((appointment) => appointment.accepted)
        .map((appt) => (
          <PastApptStylist appt={appt} key={appt.id} currentUser={currentUser} />
        ))}
    </div>
  );
}
