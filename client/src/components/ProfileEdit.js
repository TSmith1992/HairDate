import React from "react";
import ClientProfileEdit from "./ClientProfileEdit";
import StylistProfileEdit from "./StylistProfileEdit";

export default function ProfileEdit({ currentUser, setCurrentUser }) {
  return (
    <div>
      <h1>Looking to Edit Your Profile? Do it here!</h1>
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
