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
    console.log(newArray)
    return (<>
    <h2 className="text-xl text-center">Try these wines!</h2>
        <p className="text-center">These wines are chosen based on your favorites</p>
    <div className="flex row w-full p-10">

  <div className="w-4/5">
  { newArray.length ? 
  newArray.map((wine) => {
    return (<>
    
    <Link className="card bg-red-300" to={`/library/details/${wine.id}`}>
    <div>{wine.region?.location} {wine.varietal?.name}</div>
    </Link>
        </>)
  })
  : <div>Please add more favorites</div>}
  </div>
  <div className="right-0">
    <img className="w-2/5 h-auto"src="https://cdn3.iconfinder.com/data/icons/special-unusual-odd-jobs/237/weird-job-005-512.png"/>
  </div>
  
  </div>
    </>)
}