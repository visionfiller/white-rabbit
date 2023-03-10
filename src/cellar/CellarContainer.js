import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getVarietalRegions } from "../library/LibraryProvider"
import { getFavorites, getUsers } from "./CellarProvider"
import { Recommendations } from "./Recommendations"
import { WineCellar } from "./WineCellar"

export const CellarContainer =() => {
const [user, setUser] = useState({})
const [favorites, setFavorites] = useState([])
const [varietalRegions, setVarietalRegions] = useState([])
const localRabbitUser = localStorage.getItem("rabbit_user")
const rabbitUserObject = JSON.parse(localRabbitUser)

    useEffect(
        () => {
            getUsers()  
              .then((data) => {
                let foundUser = data.find((user) => user.id === rabbitUserObject.id)
                setUser(foundUser)
            
        })
    },[]
    )
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
    <h2 className="text-center text-4xl">{user.fullName}'s Favorite Wines</h2>
    <WineCellar 
    rabbitUserObject={rabbitUserObject}
    favorites={favorites}
    varietalRegions={varietalRegions}
     />
    <Recommendations 
     favorites={favorites}
     varietalRegions={varietalRegions}/>
    </>)
}