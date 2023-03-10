import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getFavorites } from "../cellar/CellarProvider"
import { getVarietalRegions } from "../library/LibraryProvider"
import { getRegions, getVarietals } from "../somm/SommProvider"
import { createFoundWineSearch } from "./LikeItProvider"
import { Probability } from "./Probability"

export const LikeItSearchedList =({searchTermStateVarietal, searchTermStateRegion}) => {
    const [varietalRegions, setVarietalRegions] = useState([])
    const [foundWine, setFoundWine] = useState({})
    const [favorites, setFavorites] = useState([])
    const [probability, setProbability] = useState(false)
    const [filteredVarietalRegions, setFiltered] = useState([])
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const navigate = useNavigate()
useEffect(
    () => {
getVarietalRegions()
.then((data) => {
    setVarietalRegions(data)
})
    },[]
)
 
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
            setFiltered(favoriteRegions)
        })

    },[favorites]
)

useEffect(
    () => {
        if (searchTermStateVarietal.length) {
            const foundVarietals = varietalRegions.filter((varietalRegion) => {
                return varietalRegion.varietal?.name.toLowerCase().includes(searchTermStateVarietal.toLowerCase() )})
                const foundWine = foundVarietals.find((varietalRegion) => {
                    return varietalRegion.region?.country.toLowerCase().includes(searchTermStateRegion.toLowerCase())})
                setFoundWine(foundWine)
            }
            
        else{
           setFoundWine({})
        }

    },[searchTermStateVarietal, searchTermStateRegion]
)



const HandleSaveSearch = (event) => {
    event.preventDefault()
    if(foundWine.id) {
        setProbability(true)
        calculatePercentage(foundWine)
    }
   
}

useEffect(
    () => {

    }
)
// const burger = document.querySelector(`#burger`)
// const menu = document.querySelector(`#menu`)

// burger.addEventListener(`click`, () => {
//     if(menu.classList.contains(`hidden`)){
//         menu.classList.remove(`hidden`)
//     }
//     else{
//         menu.classList.add(`hidden`)
//     }
// })

const calculatePercentage =(foundWine) => {
    let bodyArray = filteredVarietalRegions.filter(varietalRegion => varietalRegion.bodyId <= foundWine.bodyId || varietalRegion.bodyId >= foundWine.bodyId)
    let drynessArray = filteredVarietalRegions.filter(varietalRegion => varietalRegion.drynessId === foundWine.drynessId)
    let acidityArray = filteredVarietalRegions.filter(varietalRegion => varietalRegion.acidityId === foundWine.acidityId)
    
    let bodyPercentage = bodyArray.length/varietalRegions.length
    let drynessPercentage = drynessArray.length/varietalRegions.length
    let acidityPercentage = acidityArray.length/varietalRegions.length
    
return(<div className="h-full p-10">
<div className="text-2xl">{foundWine.region.location},{foundWine.region.country} - {foundWine.varietal.name}</div>
<div>Body:{parseFloat(bodyPercentage *100).toFixed(0)}% </div>
<div>Dryness:{parseFloat(drynessPercentage *100).toFixed(0)}% </div>
<div>Acidity:{parseFloat(acidityPercentage *100).toFixed(0) }% </div>
</div>)

}


    
    
    return(<>
   
        
   
                {
                    foundWine ? <> <Link className="card" to={`/library/details/${foundWine.id}`}>
                    <div>{foundWine?.region?.location} {foundWine.varietal?.name}</div>
                    <div>{foundWine?.region?.country}</div>
                    <img src={foundWine?.varietal?.image}/>
                    <button onClick={(event) => HandleSaveSearch(event)}>See Results</button></Link> 
                    </>

                    : "Wine not found in our library"}
        
   
  
    
    
    {probability ? calculatePercentage(foundWine)
    : ""}
    
    </>)
}