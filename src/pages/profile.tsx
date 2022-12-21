import Card from '../components/Card';
import React from 'react';
import {useParams} from 'react-router'
import useGetUser from '../hooks/useGetUser'
import responseType from '../interfaces/userresponse'
import { API_URL, USERS_ENDPOINT } from '../constants';

export default function Profile(props:{username: string}): JSX.Element {
    let { username } = useParams()
    if (!username){
        username = props.username
    }
    const {user, error} :responseType = useGetUser(`${API_URL}${USERS_ENDPOINT}/${username}`)
    return (
        <div>
            {error && <h2>Error: {error}</h2>}
            {user && <Card user={user}/>}
        </div>
    )
}
