import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignupTree(setCurrentUser){

    return(
        <>
        <p><Link to="/signupclient">Sign Up As A Client</Link></p>
        <p>-- or --</p>
        <p><Link to="/signupstylist">Sign Up As A Stylist</Link></p>
        </>
    )


} 


export default SignupTree