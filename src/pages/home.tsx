import Card from '../components/Card';
import React from 'react';
import useGetUser from '../hooks/useGetUser'
import responseType from '../interfaces/userresponse'
import { API_URL, USER_ENDPOINT } from '../constants';
  
export default function Home(): JSX.Element {
    const {user, error} :responseType = useGetUser(`${API_URL}${USER_ENDPOINT}`)
    return (
        <div>
            {user && <Card user={user}/>}
        </div>
    )
}
