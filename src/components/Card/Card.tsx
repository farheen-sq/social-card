import React from 'react'
import userType from '../../interfaces/userInterface';
import './Card.css';

const Card = ({user}: userType): JSX.Element => {
    
    return (
        <div className="card">
            {user && <div>
            <img className="img" src={user.avatar_url} alt="avatar image"/>
            {user.login && (
                <p>Username: {user.login}</p>
            )}
            {user.location && (
                <p>Location: {user.location}</p>
            )}
            {user.following!==null ? (
                <p>Following: {user.following}</p>
            ) : (null
            )}
            {user.followers!==null ? (
                <p>Followers: {user.followers}</p>
            ) : (null
            )}
            {user.bio ? (
                <p>Bio: {user.bio}</p>
            ) : (null
            )}
            {user.html_url ? (
                <a title='' href={user.html_url}>Link to github</a>
            ) : (null
            )}
            {user.blog && user.blog.length ? (
                <p>Blog: {user.blog}</p>
            ) : (null
            )}
            {user.email ? (
                <p>Email: {user.email}</p>
            ) : (null
            )}
            </div>
            }   
        </div>
    );
}

export default Card;
