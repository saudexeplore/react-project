import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Header = ()=>{


    const onlineStatus = useOnlineStatus();
    let [btn, setbtn] = useState("Login");
    
    const {loggedinUser} = useContext(UserContext);

    return (
        <div className="flex items-center justify-between px-10 bg-pink-100 shadow-sm">
            <div className="max-w-40 min-h-16">
                <img src={LOGO_URL} />
            </div>
            <div className="resmenu">
                <ul className="flex">
                    <li className="px-2">
                        {onlineStatus? "Online": "offline"}
                    </li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about-us">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/swiggyMart">Swigy Mart</Link></li>
                    <li className="px-2">Cart</li>
                    <button onClick={()=>{
                    btn === "Login" ? setbtn("Logout") : setbtn("Login")
                    }}>{btn}</button>
                    <li className="px-2 font-bold">{loggedinUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;