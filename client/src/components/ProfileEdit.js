import React from "react";
import ClientProfileEdit from "./ClientProfileEdit";
import StylistProfileEdit from "./StylistProfileEdit";
import './StyledComponents/MyCSS.css'

export default function ProfileEdit({ currentUser, setCurrentUser }) {
  return (
    <div>
      <h1>Looking to edit Your profile? Do it here!</h1>
      {currentUser.hairstyle_pic ? 
      <ClientProfileEdit 
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}/> 
      : 
      <StylistProfileEdit 
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}/>}
    </div>
  );
}
