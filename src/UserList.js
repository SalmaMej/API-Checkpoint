import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(data);
        };
        getData()
    })
    
    return(
        <div>
            {users.map((listOfUsers)=>(
                <div className='user'>
                    <h3>Name: {listOfUsers.name}</h3>
                    <p>Email: {listOfUsers.email}</p>
                    <p>City: {listOfUsers.address.city}</p>
                    <p>Company name: {listOfUsers.company.name}</p>
                    <p>Phone number: {listOfUsers.phone}</p>
                </div>
            ))}
        </div>
    )
}

export default UserList;