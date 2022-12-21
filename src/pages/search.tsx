import React, { useState } from 'react';
import Profile from './profile';
import './pages.css'

export default function Search(): JSX.Element {
    
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [username, setusername] = useState<string|null>(null);

    function clickevent(searchTerm: {searchTerm: string}): void {
        setusername(searchTerm.searchTerm)
    }
    
    return (
        <div className='app'>
            <div className='search'>
                <input placeholder='Search for Users' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={() => clickevent({searchTerm})}>search</button>
            </div>
            {username && <Profile username={username}></Profile>}
        </div>
    )
}
