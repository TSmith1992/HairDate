import React, {useState} from 'react'
import StylistChooser from './StylistChooser'

export default function SalonChooser({salon, currentUser}) {
    const [chooseSalon, setChooseSalon] = useState(false)
    return (
        <div>
            <h1>{salon.name}</h1>
            <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFGLIb5RfMOKCK49npBM0gEANk78PtpTkHQ&usqp=CAU'
            alt="Salon"
            width="600px" 
            height="600px"
            />
            <p>{salon.description}</p>
            <p>{salon.address}</p>
            <p>Rating: {salon.stylists[0].avg_rating_salon}</p>
            <p>Opening Hours: {salon.opening_hours}</p>
            <p>Closing Hours: {salon.closing_hours}</p>
            <p>Number of available stylists: {salon.stylists.length}</p>
            <button onClick={e => setChooseSalon(!chooseSalon)}>
                {chooseSalon? "Hide Stylists" : "Click here to see Stylists"}
            </button>
            {chooseSalon? 
            salon.stylists.map(stylist => <StylistChooser key={stylist.name} stylist={stylist} currentUser={currentUser}/>)
            :<></>}

        </div>
    )
}
