import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function BookingTemplate({ stylist, currentUser }) {
  const [apptDate, setApptDate] = useState("");
  const [apptStartTime, setApptStartTime] = useState("");
  const [apptEndTime, setApptEndTime] = useState("");
  const [errors, setErrors] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    if (apptEndTime <= apptStartTime) {
      alert(
        "Hmmm...Something isn't right. Check to make sure you have chosen only ONE HOUR per appointment and that start time is before your end time"
      );
    } else {
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
          end_time: apptEndTime,
          rating: 5,
          date: apptDate,
        }),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            alert(
              `Thanks! We'll let ${stylist.name} know, and if accepted, you've got a booking!`
            );
            history.push("/homepage");
            window.location.reload()
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
          <label htmlFor="end_time">How long will the appointment last?</label>
          <input
            type="time"
            name="end_time"
            value={apptEndTime}
            onChange={(e) => setApptEndTime(e.target.value)}
          />
        </p>
        <p>
          <button type="submit">Book Now!</button>
        </p>
        <p>
          {errors ? (
            <>
              {errors.errors.map((error) => (
                <strong key={error}>
                  <li>{error}</li>
                </strong>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
      </form>
    </div>
  );
}
