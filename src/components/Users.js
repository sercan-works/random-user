import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import dataUser from './data/dataUser';


const API = 'https://randomuser.me/api/';

const Users = () => {
    const [users, setUsers] = useState([])
    

    const data = async ()=>{
         await fetch(API)
        .then(res=>res.json())
        .then(res=>setUsers(res.results[0]))
    }

    useEffect(() => {
        data();
     }, [])

                 
        console.log("users",users);

   
        return (
            <div>
                <h1>RANDOM USERS</h1>
              {     
              <div>
                  {/* ? İŞARETLERİ YÜZÜNDEN 1 GÜN UĞRAŞTIM */}
                   <img className='rounded' src={users.picture?.large}/>
                    <p>{users.name?.last}</p>
                    <p>{users?.email}</p> 
            </div>
              }
           
    
            <Button variant="primary" onClick={data}>Get User</Button>
            <Button variant="warning">Add User</Button>
            </div>
        )
}


export default Users


