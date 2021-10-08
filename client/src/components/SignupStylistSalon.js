import React, { useEffect } from 'react'


export default function SignupStylistSalon({setSalonId, salons, setSalons}) {
    useEffect(() => {
        fetch(`/salons`)
          .then((r) => r.json())
          .then((r) => {
            setSalons(r);
            console.log('salons are...', salons)
          });
      }, []);

    // setSalons(     {name:"Best Kutz Salon", 
    // address: "555 Main Street", 
    // description: "We love cutting hair!", 
    // opening_hours: "9:00:00", 
    // closing_hours: "21:00:00"},   
    // { name: "Full Hair 4 U", 
    // address: "123 Broad Street", 
    // description: "You want more hair, we want more service!", 
    // opening_hours:"8:00:00", 
    // closing_hours:"19:00:00"},   
    // { name: "Follicle Fury", 
    // address: "150 West Sixth Street", 
    // description: "We're MAD about hair!", 
    // opening_hours:"9:00:00", 
    // closing_hours: "17:00:00"},    
    // { name: "Hair Me Up", 
    // address:"999 Saint Street", 
    // description: "Let's talk about HAIR baby!", 
    // opening_hours:"10:00:00", 
    // closing_hours: "22:00:00"})

    console.log('salons...', salons)
    return (
        <div class="container">
        {salons ? (
          salons.map((salon) => {
            return (
              <div key={salon.name} className="Card">
                <h1>{salon.name}</h1>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFGLIb5RfMOKCK49npBM0gEANk78PtpTkHQ&usqp=CAU"
                  alt="Salon"
                  width="300px"
                  height="300px"
                />
                <div>
                  <input
                    type="checkbox"
                    value={salon.id}
                    onChange={(e) => setSalonId(e.target.value)}
                  />
                  <strong>Click here to work with {salon.name}.</strong>
                </div>
                <h5>Address: {salon.address}</h5>
                <h5>
                  Open every day. As a Stylist collaborating with
                  them, you will only be able to accept appointments within
                  these hours.
                </h5>
                <h5>
                  <em>{salon.description}</em>
                </h5>
              </div>
            );
            })
        ) : (
          <>Loading...</>
        )}
    </div>
    )
}
