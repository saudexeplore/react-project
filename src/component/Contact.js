import Header from "./Header";

const Contact = () =>{
    return (
        <div className="text-center">
            <h1 className="text-xl p-4 m-4">This is contact us page</h1>
            <form>
                <input type="text" placeholder="Name" className="border rounded-lg m-3 p-2" />
                <input type="text" placeholder="Password" className="border rounded-lg m-3 p-2" />
                <button className="p-2 m-2 rounded-lg bg-gray-200">Submit</button>
            </form>
        </div>
    )
}


export default Contact;