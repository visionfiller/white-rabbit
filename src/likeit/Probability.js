import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getFavorites } from "../cellar/CellarProvider"
import { getVarietalRegions } from "../library/LibraryProvider"
import { deleteFoundWineSearch, getFoundWineSearches } from "./LikeItProvider"

export const Probability = () => {
const [favorites, setFavorites] = useState([])
const [varietalRegions, setVarietalRegions] = useState([])
const localRabbitUser = localStorage.getItem("rabbit_user")
const rabbitUserObject = JSON.parse(localRabbitUser)
const [foundWineSearches, setFoundWineSearches] = useState([])
const navigate = useNavigate()

useEffect(
    () => {
        getFavorites(rabbitUserObject.id)
        .then((data) => {
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
        })
            
            
            
    },[favorites]
)

useEffect(
    () => {
        getFoundWineSearches()
        .then((data) => {
            setFoundWineSearches(data)
        })
        
    },[varietalRegions]
)


const calculatePercentage =(foundWine) => {
    let bodyArray = varietalRegions.filter(varietalRegion => varietalRegion.bodyId === foundWine.bodyId)
    let drynessArray = varietalRegions.filter(varietalRegion => varietalRegion.drynessId === foundWine.drynessId)
    let acidityArray = varietalRegions.filter(varietalRegion => varietalRegion.acidityId === foundWine.acidityId)
    
    let bodyPercentage = parseFloat(bodyArray.length/varietalRegions.length)
    let drynessPercentage = parseFloat(drynessArray.length/varietalRegions.length)
    let acidityPercentage = parseFloat(acidityArray.length/varietalRegions.length)






    
return(<>
<div>Body:{parseFloat(bodyPercentage *100).toFixed(0)}% </div>
<div>Dryness:{parseFloat(drynessPercentage *100).toFixed(0)}% </div>
<div>Acidity:{parseFloat(acidityPercentage *100).toFixed(0) }% </div>
</>)

}

const handleDeleteFound = (id) => {
    deleteFoundWineSearch(id)
    .then (() => {
        navigate("/like")
    })
}







    return(<>
    <div className="flex row">
{foundWineSearches.map((foundWine) => {
return <>
    <div className="card">
    <div>{foundWine.varietal.name}</div>
    <div className="w-full">{calculatePercentage(foundWine)}</div>
    <button onClick={() => handleDeleteFound(foundWine.id)}>Clear</button>
    </div>
    </>
})}
</div>


    </>)
}