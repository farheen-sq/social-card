import { useEffect, useState } from "react";
import Axios from "axios";
import userType from "../interfaces/userInterface";
import responseType from "../interfaces/userresponse";
import { GITHUB_TOKEN } from "../constants";

const useGetUser = (url: string): responseType => {
    const [user, setuser] = useState<userType|null>(null);
    const [error, seterror] = useState<string|null>(null);
    console.log("GITHUB_TOKEN----   ", GITHUB_TOKEN)
    const config = {
        headers:{
            "Authorization": "Bearer " + GITHUB_TOKEN,
            "Accept": "application/vnd.github+json"
        }
    };
    useEffect(() => {
        Axios.get(url, config)
        .then((response)=>{
            setuser(response.data)
        }, (err)=>{
            seterror(err.response.data.message)
        })
        return () => {
            function clear(){
                setuser(null)
                seterror(null)
            }
            clear()
        }
    }, [url]);
    return { user, error };
};

export default useGetUser
