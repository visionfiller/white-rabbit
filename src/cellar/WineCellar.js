import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getVarietalRegions } from "../library/LibraryProvider"
import { deleteFavorite, getFavorites, getUsers, getVarietalRegionsById } from "./CellarProvider"

export const WineCellar =({ rabbitUserObject}) => {
const navigate= useNavigate()
const [varietalRegions, setVarietalRegions] = useState([])
const [favorites, setFavorites] = useState([])
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


const handleDelete = (rabbitUserObject, wine) => {
   let favoriteToDelete =  favorites.find((favorite) => favorite.userId === rabbitUserObject.id && favorite.varietalRegionId === wine.id)
   deleteFavorite(favoriteToDelete.id)
      .then(() => {
        getFavorites(rabbitUserObject.id)
        .then((data) => {
          setFavorites(data)
        })
        getVarietalRegions()
        .then((updatedVarietalRegionsArray) => {
            let favoriteRegions = updatedVarietalRegionsArray.filter(region => favorites.find((favorite) => favorite.varietalRegionId === region.id))
            setVarietalRegions(favoriteRegions)
      
      })
  })}



return (<>
   

    
    <div className="w-4/5 mr-auto ml-auto">
    <div className="carousel">
   {varietalRegions.map((wine) => {
    return  <div key={wine.id} className="card carousel-item w-64 h-64 bg-slate-100 shadow-xl p-4 m-2">
    <div className="text-center">{wine?.region?.location} {wine.varietal?.name}</div>
    <div>Country: {wine?.region?.country}</div>
    <img className="h-3/5 object-cover"src={wine?.varietal?.image}/>
   <button onClick={()=> handleDelete(rabbitUserObject, wine)}>Delete</button>
   
    </div>
    
   })}
   </div>
   </div>
    </>
)
}
