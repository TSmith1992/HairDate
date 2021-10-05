import React, { useState } from "react";
import BookingTemplate from "./BookingTemplate";

export default function StylistChooser({ stylist, currentUser }) {
  const [showBooking, setShowBooking] = useState(false);
  const stylistActiveYears = new Date(stylist.years_active);
  const stylistYearsActive = `${
    stylistActiveYears.getMonth() + 1
  }/${stylistActiveYears.getDate()}/${stylistActiveYears.getFullYear()}`;

  console.log(stylist);

  return (
    <div>
      Hi! I am {stylist.name}!
      <img
        src={stylist.profile_pic}
        alt={stylist.name}
        width="200px"
        height="150px"
      />
      <p>{stylist.description}</p>
      <p>First Date as a Stylist: {stylistYearsActive}</p>
      <p>Total number of appointments: {stylist.appointments.length}</p>
      <p>Average Rating: {stylist.avg_rating}</p>
      <button onClick={(e) => setShowBooking(!showBooking)}>
        Schedule time with {stylist.name}
      </button>
      {showBooking ? (
        <BookingTemplate stylist={stylist} currentUser={currentUser} />
      ) : (
        <></>
      )}
    </div>
  );
}
