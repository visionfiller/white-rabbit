import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getVarietalRegions } from "../library/LibraryProvider"
import { getFavorites, getUsers } from "./CellarProvider"
import { Recommendations } from "./Recommendations"
import { MatchedWineBottles, WineBottles } from "./WineBottles"
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
    
     
    
    
    return (<>
    <h2 className="text-center text-4xl">{user.fullName}'s Favorites</h2>
    <WineCellar 
    rabbitUserObject={rabbitUserObject}
    
     />
     <div className="flex flex-row-reverse w-full">
     <div className="flex flex-col w-full">
    <Recommendations 
     favorites={favorites}
     varietalRegions={varietalRegions}/>
    <MatchedWineBottles
    rabbitUserObject={rabbitUserObject} />
    </div>
    <div className=" ">
    <img className="w-4/5 h-auto bg-none text-center opacity-60 blur-sm"src="https://i.etsystatic.com/5331662/r/il/663d10/250251863/il_794xN.250251863.jpg"/>
  </div>
  </div>
  
    </>)
}