import React, { useState } from "react";
import BookingTemplate from "./BookingTemplate";
import "./StyledComponents/MyCSS.css"

export default function StylistChooser({ stylist, currentUser }) {
  const [showBooking, setShowBooking] = useState(false);
  const stylistActiveYears = new Date(stylist.years_active);
  const stylistYearsActive = `${
    stylistActiveYears.getMonth() + 1
  }/${stylistActiveYears.getDate()}/${stylistActiveYears.getFullYear()}`;

  console.log(stylist);

  return (
    <div className="stylistcard">
      <strong>{stylist.name}</strong>!
      <img
        src={stylist.profile_pic}
        alt={stylist.name}
        width="200px"
        height="150px"
      />
      <p><em>{stylist.description}</em></p>
      <p><strong>First Date as a Stylist: </strong>{stylistYearsActive}</p>
      <p><strong>Total number of appointments:</strong><br></br> {stylist.appointments.length}</p>
      <p><strong>Average Rating:</strong> {stylist.avg_rating}</p>
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
