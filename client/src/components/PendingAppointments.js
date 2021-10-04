import React from 'react'
import PendingAppt from './PendingAppt'

export default function PendingAppointments({currentUser}) {
    return (
        <div>
            HI! I'm the Pending Appoint Page
            {currentUser.appointments.filter(appointment => appointment.accepted !== true).map(appt => <PendingAppt appt={appt} key ={appt.id} currentUser={currentUser}/>)}
        </div>
    )
}
