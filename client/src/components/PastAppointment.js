import React from 'react'
import PastAppt from './PastAppt'

export default function PastAppointment({currentUser}) {
    return (
        <div>
            Hi! I'm the Past Appointment Page!
            {currentUser.appointments.filter(appointment => appointment.accepted).map(appt => <PastAppt appt={appt} key ={appt.id} currentUser={currentUser}/>)}
        </div>
    )
}
