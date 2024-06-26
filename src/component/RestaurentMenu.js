import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const Restaurentmenu = () =>{

    const {resId} = useParams();
    
    const resInfo = useRestaurentMenu(resId);
    

    if (resInfo === null) return <Shimmer />

    const {name, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return (
        <div className="resmenu">
            <h2>{name}</h2>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>menu</h3>
            <ol style={{display: "block"}}>
                {itemCards.map((items) => <li key={items.card.info.id}>{items.card.info.name} - {items.card.info.price/100} Rs</li>)}
            </ol>
        </div>
    )
}


export default Restaurentmenu;