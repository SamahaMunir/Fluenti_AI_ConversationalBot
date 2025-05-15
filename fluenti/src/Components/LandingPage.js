import React, { useState } from 'react';
import axios from 'axios'; 


const LandingPage = () => {
    //Get API
   const [userlist,setUserList]=useState([]);
 
   const getUsers =async( )=>{
    const apiResponce=await axios.get("https://jsonplaceholder.typicode.com/users");
    setUserList(apiResponce.data)
   }
 
    
    return (
        <div>
            <h1>i am landing page</h1>
            <div>
            <button onClick={getUsers}>Get user detail</button>
            <div>
                <ul>
                    {
                        userlist.map((item)=>{
                            return(
                                <li>{item.id}</li>
                        )
                        })
                    }
                </ul>
            </div>
            </div>
           
          
        </div>
    );
};

export default LandingPage;