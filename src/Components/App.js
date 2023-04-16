import {useState} from "react";
import React from 'react';
import axios from "axios";
import Homepage from "./Homepage";

function App() {
  const [profileData, setProfileData] = useState(null)
  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
        .then((response) => {
          const res =response.data
          setProfileData(({
            profile_name: res.name,
            about_me: res.about}))
        }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })}

  return (
   <div>
   <Homepage />
   </div> 
  );
}

export default App;
