import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{

    const [onlineStatus, setonlineStatus] = useState(true);

    useEffect(()=>{
        addEventListener("offline", (event) => {
            setonlineStatus(false)
        });

        addEventListener("online", (event) => {
            setonlineStatus(true)
        });
    }, [])

    return onlineStatus;

}


export default useOnlineStatus;