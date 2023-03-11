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


const calculatePercentage =(foundWine) => {
    let bodyRange = foundWine.bodyId + 1
    let bodyRangeTwo = foundWine.bodyId - 1
    let bodyArray = filteredVarietalRegions.filter(varietalRegion => (varietalRegion.bodyId === bodyRange) || (varietalRegion.bodyId === foundWine.bodyId) || (varietalRegion.bodyId === bodyRangeTwo)  )
    console.log(bodyArray.length/filteredVarietalRegions.length)
    let drynessUp = foundWine.drynessId + 1
    let drynessDown = foundWine.drynessId -1
    let drynessArray = filteredVarietalRegions.filter(varietalRegion => varietalRegion.drynessId === foundWine.drynessId || varietalRegion.drynessId === drynessUp || varietalRegion.drynessId === drynessDown)

    let acidityUp = foundWine.acidityId + 1
    let acidityDown = foundWine.acidityId -1
    let acidityArray = filteredVarietalRegions.filter(varietalRegion => varietalRegion.acidityId === foundWine.acidityId || varietalRegion.acidityId === acidityUp || varietalRegion.acidityId === acidityDown)
    
    let bodyPercentage = bodyArray.length/filteredVarietalRegions.length
    let drynessPercentage = drynessArray.length/filteredVarietalRegions.length
    let acidityPercentage = acidityArray.length/filteredVarietalRegions.length
    
return(<div className="h-full p-10">
<div className="text-2xl">{foundWine.region.location},{foundWine.region.country} - {foundWine.varietal.name}</div>
<div>Body:{parseFloat(bodyPercentage *100).toFixed(0)}% </div>
<div>Dryness:{parseFloat(drynessPercentage *100).toFixed(0)}% </div>
<div>Acidity:{parseFloat(acidityPercentage *100).toFixed(0) }% </div>
{bodyPercentage > .50 || drynessPercentage > .50 || acidityPercentage > .50 ? <div className="text-2xl font-extrabold">YES! I think you'll like this wine</div>
: <div className="text-2xl font-extrabold">No, it might not be for you :(</div>}
</div>)

}


    
    
    return(<>
   
        
   
                {
                    foundWine ? <> <Link className="card w-64 h-64 bg-slate-100 shadow-xl p-4 m-2" to={`/library/details/${foundWine.id}`}>
                    <div>{foundWine?.region?.location} {foundWine.varietal?.name}</div>
                    <div>{foundWine?.region?.country}</div>
                    <img className="h-3/5 object-cover"src={foundWine?.varietal?.image}/>
                    <button onClick={(event) => HandleSaveSearch(event)}>See Results</button></Link> 
                    </>

                    : "Wine not found in our library"}
        
   
  
    
    
    {probability && foundWine ? calculatePercentage(foundWine)
    : ""}
    
    </>)
}