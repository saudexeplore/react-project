import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/userContext";



const RestaurentCard =(props)=>{
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating} = resData?.info;
    const {loggedinUser} = useContext(UserContext);
    

    return(
        <div className="w-64 border border-blue-300 rounded-xl bg-orange-100 min-h-96 m-4 overflow-hidden">
        <img className="w-full h-52" src={CDN_URL+cloudinaryImageId}/>
        <div className="p-2">
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating} stars</h3>
        <h4>User: {loggedinUser}</h4>
        </div>
        </div>
    )
}


// HOC

export const isRestaurentOpen = (RestaurentCard) =>{
    return (props) => {
        return (
            <div>
                <p>Open</p>
                <RestaurentCard {...props}/>
            </div>
        )
    }
}


export default RestaurentCard;