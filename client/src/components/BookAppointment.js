import React, { useState, useEffect } from "react";
import SalonChooser from "./SalonChooser";

export default function BookAppointment({ currentUser, isClient }) {
  const [salons, setSalons] = useState([]);
  useEffect(() => {
    fetch("/salons")
      .then((r) => r.json())
      .then((data) => {
          setSalons(data);
        });
    },[]);

    return (
    <div>
      <h1>Hi! I'm the book an appointment page!</h1>
      <p>
        Please choose below the Salon in which you would like to get your hair
        done!
      </p>
      {salons? 
      salons.map(salon => <SalonChooser key={salon.name} salon={salon} currentUser={currentUser}/>)
      :<>Loading...</>}
    </div>
  );
}
