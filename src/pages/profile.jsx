import Axios from 'axios';
import Card from '../components/Card.jsx';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router'
const useGetUser = require("../hooks/useGetUser")

export default function Profile() {
    let { username } = useParams();

    const [user, setUser] = useState('');
    const [error, seterror] = useState('');
    const getUser = () =>{
        const config = {
            headers:{
                "Authorization": "Bearer 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",
                "Accept": "application/vnd.github+json"
            }
            };
        Axios.get("https://api.github.com/users/"+username, config).then((response)=>{
            setUser(response.data)
        }, (err)=>{
            seterror(err.response.data)
        })
    }

    const getCard = () =>{
        if ({user}.user!=='' && error ===''){
            return <Card user={user}/>
        }
        if (error!==''){
            return <h2>Error: {error.message}</h2>
        }
    }
    useEffect(()=>{
        getUser()
    }, [])

    
    return (
        <div className='app'>
            {getCard()}
        </div>
    )
}
