import React, { useState, useEffect } from "react";
import SalonChooser from "./SalonChooser";
import "./StyledComponents/MyCSS.css";

export default function BookAppointment({ currentUser }) {
  const [salons, setSalons] = useState([]);
  useEffect(() => {
    fetch("/salons")
      .then((r) => r.json())
      .then((data) => {
        setSalons(data);
      });
  }, []);

  return (
    <div className="container">
      {salons ? (
        salons.map((salon) => (
          <SalonChooser
            key={salon.name}
            salon={salon}
            currentUser={currentUser}
          />
        ))
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
