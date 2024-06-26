import { useState } from "react";


const User = ({name})=>{
    const [count, setcount]  = useState(0)
    const [count2]  = useState(2)

    return <div className="userCard">
        <h1>count = {count}</h1>
        <button onClick={()=>{
            setcount(count+1)
        }}>Click me</button>
        <h1>count2 = {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Delhi</h3>
    </div>
}

export default User;