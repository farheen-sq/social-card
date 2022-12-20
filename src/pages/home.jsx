import Axios from 'axios';
import Card from '../components/Card.jsx';
import React, { useEffect, useState } from 'react';

const userDefault = {
    "avatar": "avatar",
    "username": "test1",
    "location": "delhi",
    "following": "50",
    "followers": "60",
    "bio": "description",
    "link": "https://www.github.com",
    "blog": "blog",
    "email": "test@icanbwell.com"
}
  
export default function Home() {
    const [user, setUser] = useState(userDefault);
    const getUser = () =>{
        const config = {
            headers:{
                "Authorization": "Bearer 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",
                "Accept": "application/vnd.github+json"
            }
            };
        Axios.get("https://api.github.com/user", config).then((response)=>{
            setUser(response.data)
        })
    }
    useEffect(()=>{
        getUser()
    }, [])
    
    return (
        <Card user={user}/>
    )
}
