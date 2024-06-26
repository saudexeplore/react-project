import { useState, useEffect } from "react";
import { REST_INFO } from "../utils/constant";

const useRestaurentMenu = (resId) =>{
    const [resInfo, setresInfo] = useState(null)

    useEffect(()=>{
        fethData();
    }, [])
    const fethData = async () => {
        const data = await fetch(REST_INFO + resId);
        const json = await data.json();
        setresInfo(json.data);
    };


    return resInfo;
}

export default useRestaurentMenu;