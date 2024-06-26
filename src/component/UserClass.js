import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props)
       
        this.state = {
            count: 0,
            count2: 2,
        }
    }
    render(){
        const {name, location} = this.props
        const {count, count2} = this.state
        return <div className="userCard">
            <h1>count = {count}</h1>
            <h1>count2 = {count2}</h1>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 1,
                })
            }}>Click Me</button>
            
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
    </div>
    }

}

export default UserClass;