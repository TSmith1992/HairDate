import React from 'react'
import PendingAppt from './PendingAppt'

export default function PendingAppointments({currentUser}) {
    return (
        <div>
            Find here all of your Pending Appointments!
            {currentUser.appointments.filter(appointment => appointment.accepted !== true).map(appt => <PendingAppt appt={appt} key ={appt.id} currentUser={currentUser}/>)}
        </div>
    )
}
