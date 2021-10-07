import React from 'react'
import PendingAppt from './PendingAppt'
import './StyledComponents/MyCSS.css'

export default function PendingAppointments({currentUser}) {
    return (
        <div  className="pending">
            Find here all of your Pending Appointments!
            <div className='pendingCard'>{currentUser.appointments.filter(appointment => appointment.accepted !== true).map(appt => <PendingAppt appt={appt} key ={appt.id} currentUser={currentUser}/>)}</div>
        </div>
    )
}
