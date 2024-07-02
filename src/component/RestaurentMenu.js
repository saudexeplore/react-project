import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useDispatch } from "react-redux";
import { addItems, removeItem } from "../utils/cartSlice";


const Restaurentmenu = () =>{

    const {resId} = useParams();
    
    const resInfo = useRestaurentMenu(resId);
    const dispatch = useDispatch()

    const handleAddItems = () =>{
        dispatch(addItems("pizza"))
    }
    const handleRemoveItems = () =>{
        dispatch(removeItem())
    }
    
    

    if (resInfo === null) return <Shimmer />

    const {name, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return (
        <div className="p-8">
            <h2>{name}</h2>
            <button className="px-4 py-0.5 border border-solid border-l-cyan-200 rounded-lg mr-4" onClick={handleAddItems}>Add++</button>
            <button className="px-4 py-0.5 border border-solid border-l-cyan-200 rounded-lg mr-4" onClick={handleRemoveItems}>Remove--</button>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>menu</h3>
            <ol style={{display: "block"}}>
                {itemCards.map((items) => <li key={items.card.info.id}>{items.card.info.name} - {items.card.info.price/100} Rs</li>)}
            </ol>
        </div>
    )
}


export default Restaurentmenu;