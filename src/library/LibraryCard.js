import { useEffect, useReducer, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { getFavorites } from "../cellar/CellarProvider"
import { addToFavorites } from "./LibraryProvider"

export const LibraryCard = ({wine}) => {
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [favorites, setFavorites] = useState([])
  
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
const wineObject = {
    userId:rabbitUserObject.id,
    varietalRegionId: wine.id
}
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
        if(wine.varietalId){
        setIsLoading(false)}

       
       
      

    },[wine,favorites]
)


const StarButton = (wine) => {
    return favorites.map((favorite) =>
     { 
        if(favorite.varietalRegionId === wine.id){
            return <button className="bg-yellow-500 rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>


            </button>
    //     return   <button><svg xmlns="http://www.w3.org/2000/svg" fill="bg-yellow-500" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    //     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    //   </svg>
    //   </button>
     }
       
     
     else {
        return ""
     }
    
     })}


    return (<>
    <div className="card w-64 h-64 bg-slate-100 shadow-xl m-4 ">
        
    <div className="absolute">
            {rabbitUserObject.staff ?  <button className="btn" onClick={()=> navigate(`/library/edit/${wine.id}`) }>Edit Details</button>
            : ""
             } 
             {!rabbitUserObject.staff && favorites.every(favorite => favorite.varietalRegionId !== wine.id)? <button className="btn btn-sm " onClick={()=> addToFavorites(wineObject).then(()=>navigate("/cellar")) }> Add to Favorites
            </button> 
            :""

             }
            

        </div> 
        <div className="absolute right-0">
            { isLoading? ""
            : StarButton(wine)}
        </div>
        <div className="card-body p-2 m-2 h-full ">
        <Link className="" to={`/library/details/${wine.id}`}>
            <img className="h-36 w-full mx-auto object-cover" src={wine?.varietal?.image}/>
            </Link>
            <div className="card-title m-2 flex flex-col w-full">
                <div>{wine?.region?.location} {wine.varietal?.name}</div>
                <div className="text-sm">Country: {wine?.region?.country}</div>
                
            </div>
            
           
     </div>
             
</div>
            
    </>)
}

/*
<div className="w-4/5 mr-auto ml-auto">
    <div className="carousel">
   {varietalRegions.map((wine) => {
    return  <div key={wine.id} className="card carousel-item w-64 h-64 bg-slate-100 shadow-xl p-4 m-2">
    <div className="text-center">{wine?.region?.location} {wine.varietal?.name}</div>
    <div>Country: {wine?.region?.country}</div>
    <img className="h-3/5 object-cover"src={wine?.varietal?.image}/>
   <button onClick={()=> handleDelete(rabbitUserObject, wine)}>Delete</button>
   
    </div>
    */

