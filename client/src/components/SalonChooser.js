import React, { useState } from "react";
import StylistChooser from "./StylistChooser";
import './StyledComponents/MyCSS.css'

export default function SalonChooser({ salon, currentUser }) {
  const salonOpening = new Date(salon.opening_hours);
  const salonClosing = new Date(salon.closing_hours);
  const salonOpeningHours = salonOpening.toLocaleTimeString("en-US");
  const salonClosingHours = salonClosing.toLocaleTimeString("en-US");
  const [chooseSalon, setChooseSalon] = useState(false);

  return (
    <div className="saloncard">
      <h1>{salon.name}</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFGLIb5RfMOKCK49npBM0gEANk78PtpTkHQ&usqp=CAU"
        alt="Salon"
        width="600px"
        height="600px"
      />
      <p>{salon.description}</p>
      <p>{salon.address}</p>
      <p>Rating: {salon.stylists[0].avg_rating_salon}</p>
      <p>Opening Hours: {salonOpeningHours}</p>
      <p>Closing Hours: {salonClosingHours}</p>
      <p>Number of available stylists: {salon.stylists.length}</p>
      <button onClick={(e) => setChooseSalon(!chooseSalon)}>
        {chooseSalon ? "Hide Stylists" : "Click here to see Stylists"}
      </button>
      {chooseSalon ? (
        salon.stylists.map((stylist) => (
          <StylistChooser
            key={stylist.name}
            stylist={stylist}
            currentUser={currentUser}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
