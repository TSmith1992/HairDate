import React from "react";
import ClientProfileEdit from "./ClientProfileEdit";
import StylistProfileEdit from "./StylistProfileEdit";

export default function ProfileEdit({ currentUser, isClient, setCurrentUser }) {
  return (
    <div>
      <h1>Looking to Edit Your Profile? Do it here!</h1>
      {isClient ? 
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
