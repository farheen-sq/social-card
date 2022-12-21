import { useEffect, useState } from "react";
import Axios from "axios";
import userType from "../interfaces/userInterface";
import responseType from "../interfaces/userresponse";

const useGetUser = (url: string): responseType => {
    const [user, setuser] = useState<userType|null>(null);
    const [error, seterror] = useState<string|null>(null);
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
