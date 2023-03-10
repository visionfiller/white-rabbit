import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getVarietalRegionsById } from "../cellar/CellarProvider"
import { addToFavorites } from "./LibraryProvider"

export const CardDetails =() => {
const {varietalRegionId} = useParams()
const [wine, setWine]= useState({})
const localRabbitUser = localStorage.getItem("rabbit_user")
const rabbitUserObject = JSON.parse(localRabbitUser)

const wineObject = {
    userId:rabbitUserObject.id,
    varietalRegionId: wine.id
}

useEffect(
    () => {
        getVarietalRegionsById(varietalRegionId)
        .then((detail) => {
            setWine(detail)
        })
    },[]
)

    return(<>
    <div className="text-center">
        <button className="btn btn-accent" onClick={()=> addToFavorites(wineObject) }>Add to favorites</button>
    <div className="text-4xl font-bold">{wine?.region?.location} {wine.varietal?.name}</div>
    <div>Country: {wine?.region?.country}</div>
    <div>
        <img className="w-4/5 ml-auto mr-auto"src={wine?.varietal?.image}/>
    </div>
     <div>Body: {wine?.body?.density}</div>
    <div>Acidity: {wine?.acidity?.style}</div>
    <div>Dryness: {wine?.dryness?.level}</div>
    <div>About this wine: {wine?.varietal?.description}</div>
    </div>
    </>)
}