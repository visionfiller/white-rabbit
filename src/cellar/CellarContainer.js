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
    <h2 className="text-center text-4xl">{user.fullName}'s Favorite Wines</h2>
    <WineCellar 
    rabbitUserObject={rabbitUserObject}
    
     />
     <div className="flex row">
     <div className="flex flex-col">
    <Recommendations 
     favorites={favorites}
     varietalRegions={varietalRegions}/>
    <MatchedWineBottles
    rabbitUserObject={rabbitUserObject} />
    </div>
    <div className="mx-auto my-auto">
    <img className="w-3/5 h-auto bg-none"src="https://cdn3.iconfinder.com/data/icons/special-unusual-odd-jobs/237/weird-job-005-512.png"/>
  </div>
  </div>
  
    </>)
}