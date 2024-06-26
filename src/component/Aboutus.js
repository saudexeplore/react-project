import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";

const  Aboutus = () =>{
    
    return (
        <div>
        <h1>This is about us page</h1>
        {/* <User name={"Function component"}/> */}

        <UserClass name={"Class Based Component"} location={"America"}/>
        </div>
    )
}

export default Aboutus; 