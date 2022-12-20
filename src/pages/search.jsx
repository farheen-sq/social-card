import Axios from 'axios';
import Card from '../components/Card.jsx';
import React, { useEffect, useState } from 'react';

export default function Search() {
    const [user, setUser] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [error, seterror] = useState('');
    const getUser = (username) =>{
        seterror('')
        setUser('')
        // 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
        const config = {
            headers:{
                "Authorization": "Bearer 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",
                "Accept": "application/vnd.github+json"
            }
            };
        Axios.get("https://api.github.com/users/"+username, config).then((response)=>{
            setUser(response.data)
        }, (err)=>{
            console.log(err.response.data)
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
    
    return (
        <div className='app'>
            <div className='search'>
                <input placeholder='Search for Users' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={() => getUser(searchTerm)}>search</button>
            </div>
            <div className='margin'>
                {getCard()}
            </div>
        </div>
    )
}
