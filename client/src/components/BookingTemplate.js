import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function BookingTemplate({ stylist, currentUser }) {
  const [apptDate, setApptDate] = useState("");
  const [apptStartTime, setApptStartTime] = useState("");
  const [errors, setErrors] = useState("");
  const history = useHistory();
  let minutesToAdd = 60;
  let end_time = new Date(apptStartTime + minutesToAdd * 60000);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: currentUser.id,
        stylist_id: stylist.id,
        start_time: apptStartTime,
        end_time: end_time.getTime(),
        rating: 5
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          alert(
            `Thanks! We'll let ${stylist.name} know, and if accepted, you've got a booking!`
          );
          history.push("/homepage");
        });
      } else {
        // history.push("/signuptree");
        res.json().then((errors) => {
          console.log(
            "these are the errors after performing the post appt.: ",
            errors
          );
          setErrors(errors);
        });
      }
    });
  }

  return (
    <div>
      Set a date and time below. All appointments last for one hour
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="date">
            When Would You Like to see {stylist.name}?
          </label>
          <input
            type="date"
            name="date"
            value={apptDate}
            onChange={(e) => setApptDate(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="start_time">
            When Would You Like to see {stylist.name}?
          </label>
          <input
            type="time"
            name="start_time"
            value={apptStartTime}
            onChange={(e) => setApptStartTime(e.target.value)}
          />
        </p>
        <p>
          <button type="submit">Book Now!</button>
        </p>
      </form>
    </div>
  );
}
