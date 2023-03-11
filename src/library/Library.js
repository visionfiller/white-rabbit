import { useEffect, useState } from "react"
import { LibraryCard } from "./LibraryCard"
import { getRegions, getVarietalRegions, getWineTypes } from "./LibraryProvider"

export const Library = () => {
const [varietalRegions, setVarietalRegions] = useState([])
const [filteredWines, setFilteredWines] = useState([])
const [wineTypeId, setWineTypeId] = useState("")
const [wineTypes, setWineTypes] = useState([])

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
        getWineTypes()
        .then((data) => {
            setWineTypes(data)
        })
    },[]
)
useEffect(
    () => {
        if (wineTypeId){
            const wineTypesArray = varietalRegions.filter(varietal => varietal.varietal?.wineTypeId === wineTypeId)
            setFilteredWines(wineTypesArray)
        }
        else {
//for customers
            setFilteredWines(varietalRegions)
     
}
    },
[varietalRegions]   
)

useEffect(
    () => {
        if (wineTypeId){
            const wineTypesArray = varietalRegions.filter(varietal => varietal.varietal?.wineTypeId === wineTypeId)
            setFilteredWines(wineTypesArray)
        }
        else {
//for customers
            setFilteredWines(varietalRegions)
     
}
    },
    [wineTypeId]
)








    return <>
    <h2 className="text-center text-4xl">The Library</h2>
    <div className="grid-cols-2 p-10 bg-slate-200">
    <div className="">
    <label>Filter by type: </label>
    <select
    onChange={
        (evt) => {
            setWineTypeId(parseInt(evt.target.value))
        }}>
            <option value="">All Wines</option>
        {wineTypes.map((type) => {
            return <option value={type.id} id={type.id}>{type.type}</option>
        })}
    </select>

    </div>
    <div className="flex row flex-wrap">
    {filteredWines.map(wine => <LibraryCard 
    wine={wine}/>)
                
}
    </div>
    </div>
    </>
}