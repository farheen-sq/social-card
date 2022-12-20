import { useEffect, useState } from "react";
import Axios from "axios";

const useGetUser = (url: string) => {
    const [user, setuser] = useState(null);
    const [error, seterror] = useState(null);
    const config = {
        headers:{
            "Authorization": "Bearer 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",
            "Accept": "application/vnd.github+json"
        }
        };
    useEffect(() => {
        Axios.get(url, config)
        .then((response)=>{
            setuser(response.data)
        }, (err)=>{
            seterror(err.response.data)
        })
    }, [url]);
    return { user, error };
    };
export default useGetUser;
