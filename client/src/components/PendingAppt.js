import React from "react";

export default function PendingAppt({ currentUser, appt }) {
  let startTime = new Date(appt.start_time).getHours();
  // .toLocaleTimeString('en-US')
  console.log(appt);

  function RejectAppt(e) {
    fetch(`/appointments/${appt.id}`, {
      method: "DELETE",
    });
    alert(`You have successfully rejected this appointment on ${appt.date}.`);
    window.location.reload();
  }

  function AcceptAppt(e) {
    fetch(`/appointments/${appt.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accepted: true }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
    window.location.reload();
  }

  return (
    <div>
      <p>Appt date:{appt.date}</p>
      {/* <p>
        Appt Start Time :{appt.start_time}...{startTime}
      </p>
      <p>Appt End Time:{appt.end_time}</p> */}
      {currentUser.hairstyle_pic ? (
        <button name="Reject" onClick={RejectAppt}>
          Delete Appointment Request
        </button>
      ) : (
        <>
          <button name="Accept" onClick={AcceptAppt}>
            Accept Appointment
          </button>
          <button name="Reject" onClick={RejectAppt}>
            Reject Appointment
          </button>
        </>
      )}
    </div>
  );
}
