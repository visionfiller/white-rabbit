import { useEffect, useState } from "react"
import { getVarietalRegions } from "../library/LibraryProvider"
import { getFavorites, getVarietalRegionsById } from "./CellarProvider"

export const WineCellar =() => {
const [favorites, setFavorites] = useState([])
const [varietalRegions, setVarietalRegions] = useState([])
const localRabbitUser = localStorage.getItem("rabbit_user")
const rabbitUserObject = JSON.parse(localRabbitUser)
useEffect(
    ()=> {
        getFavorites(rabbitUserObject.id)
        .then((data)=> {
            setFavorites(data)
            
        
        })
    },[]

)

useEffect(
    () => {
        getVarietalRegions()
        .then((varietalRegionsArray) => {
            let favoriteRegions = varietalRegionsArray.filter(region => favorites.find((favorite) => favorite.varietalRegionId === region.id))
            setVarietalRegions(favoriteRegions)
        }
        )
    },[favorites]
)



return (<>
    <div><form></form></div>


    
    <div className="flex row flex-wrap">
   {varietalRegions.map((wine) => {
    return  <div className="card">
    <div>{wine?.region?.location} {wine.varietal?.name}</div>
    <div>Country: {wine?.region?.country}</div>
    <img src={wine?.varietal?.image}/>
   
    </div>
    
   })}
   </div>
    </>
)
}
