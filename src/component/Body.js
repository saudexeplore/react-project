import { useEffect, useState } from "react";
import resList from "../utils/mockData"
import RestaurentCard , {isRestaurentOpen} from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{   
  const [listofRestaurents, setlistofRestaurents] = useState([]);
  const [searchtext, setsearchtext] = useState([]);
  const [filterdresturent, setfilterdresturent] = useState([]);

  // console.log(listofRestaurents);

  const RestaurentOpen = isRestaurentOpen(RestaurentCard);

  useEffect(()=>{
    fetchData();
  }, [])
  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setlistofRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilterdresturent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Bhsodke tera internet chla gya h tu kya gand marane aya h yha pe ab?</h1>


    return listofRestaurents.length  === 0 ? <Shimmer /> : (
        <div className="body">
          <div className="flex p-4 m-4">
            <input placeholder="Enter Restaurent Name" className="p-4 border border-solid border-blue-200 rounded-lg mr-4" type="text" value={searchtext} onChange={(e)=>{
              setsearchtext(e.target.value);
            }}/>
            <button className="px-4 py-0.5 border border-solid border-l-cyan-200 rounded-lg mr-4" onClick={()=>{
              const filterrestaurents = listofRestaurents.filter((res)=>{
                return res?.info?.name.toLowerCase().includes(searchtext.toLowerCase());                
              })
              setfilterdresturent(filterrestaurents);
              setsearchtext("")
            }}>Search</button>
            <button className="px-4 py-0.5 border border-solid border-l-cyan-200 rounded-lg" onClick={()=>{
            const filterList = listofRestaurents.filter((res)=> res.info.avgRating>4.5)
            setlistofRestaurents(filterList);
          }}>Reated Button</button>
          </div>
        <div className="flex flex-wrap px-12 justify-center">
            {
                filterdresturent.map((restourent)=>(
                  <Link key={restourent.info.id} to={"/restaurent/"+restourent.info.id}>
                    {
                      restourent.info.isOpen ? <RestaurentOpen resData={restourent}/> : <RestaurentCard resData={restourent}/>
                    }
                                      
                    </Link>
                ))
                
            }
        </div>
        </div>
    )
}

export default Body;