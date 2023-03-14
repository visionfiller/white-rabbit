import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getVarietalRegions } from "../library/LibraryProvider"

export const Recommendations =({favorites }) => {
    const [varietalRegions, setVarietalRegions]= useState([])
    useEffect(
        () => {
            getVarietalRegions()
            .then((data) => {
                setVarietalRegions(data)
            })
        },[]
    )




    let array = varietalRegions.filter((region) => favorites.find((favorite=> favorite.varietalRegion?.acidityId === region.acidityId && favorite.varietalRegion?.drynessId === region.drynessId && favorite.varietalRegion?.bodyId === region.bodyId )))
    let newArray = array.filter(wine => favorites.every(favorite => favorite.varietalRegionId !== wine.id))
   
    return (<>
    <h2 className="text-2xl ">Try these different varietal regions!</h2>
     <p className="">These wines are chosen based on your favorites</p>
    <div className="flex  w-full p-10 justify-evenly">

  <div className="w-full flex flex-col">
  { newArray.length ? 
  newArray.map((wine) => {
    return (<>
    
    <Link key={wine.id} id={wine.id}  className="" to={`/library/details/${wine.id}`}>
    <div  className="inline-block">{wine.region?.location} {wine.varietal?.name}</div>
    </Link>
        </>)
  })
  : <div>Please add more favorites</div>}
  </div>
 
  </div>
    </>)
}