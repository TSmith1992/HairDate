import React from "react";
import PastAppointment from "./PastAppointment";
import PastAppointmentStylist from "./PastAppointmentStylist";

export default function PastAppointmentTree({ currentUser }) {
  return (
    <div>
      {currentUser.avg_rating ? (
        <PastAppointmentStylist currentUser={currentUser} />
      ) : (
        <PastAppointment currentUser={currentUser} />
      )}
    </div>
  );
}
