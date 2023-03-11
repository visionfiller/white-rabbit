import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getVarietalRegions } from "../library/LibraryProvider"
import { deleteFavorite, getFavorites, getUsers, getVarietalRegionsById } from "./CellarProvider"

export const WineCellar =({favorites, rabbitUserObject, varietalRegions}) => {
const navigate= useNavigate()


const handleDelete = (rabbitUserObject, wine) => {
   let favoriteToDelete =  favorites.find((favorite) => favorite.userId === rabbitUserObject.id && favorite.varietalRegionId === wine.id)
   deleteFavorite(favoriteToDelete.id)
      .then(() => {
        navigate(`/cellar`)
      })
  }



return (<>
   

    
    <div className="w-4/5 mr-auto ml-auto">
    <div className="carousel">
   {varietalRegions.map((wine) => {
    return  <div className="card carousel-item w-64 h-64 bg-slate-100 shadow-xl p-4 m-2">
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
