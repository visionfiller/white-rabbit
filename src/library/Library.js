import { useEffect, useState } from "react"
import { LibraryCard } from "./LibraryCard"
import { getRegions, getVarietalRegions, getWineTypes } from "./LibraryProvider"

export const Library = () => {
const [varietalRegions, setVarietalRegions] = useState([])
const [filteredWines, setFilteredWines] = useState([])
const [wineTypeId, setWineTypeId] = useState("")
const [wineTypes, setWineTypes] = useState([])
const [sorted, setSorted] = useState("")

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
        let varietalRegionsFiltered = [...varietalRegions]
        if (wineTypeId){
             varietalRegionsFiltered = varietalRegionsFiltered.filter(varietal => varietal.varietal?.wineTypeId === wineTypeId)
        }
         if (sorted === "body") {
            varietalRegionsFiltered = varietalRegionsFiltered.sort((a,b) => b.bodyId - a.bodyId)
            
        }
        if (sorted === "acidity") {
            varietalRegionsFiltered = varietalRegionsFiltered.sort((a,b) => a.acidityId - b.acidityId)
            
        }
        if (sorted === "dryness") {
            varietalRegionsFiltered = varietalRegionsFiltered.sort((a,b) => a.drynessId - b.drynessId)
            
        }
        
//for customers
            setFilteredWines( varietalRegionsFiltered )
     

    },
[varietalRegions, wineTypeId, sorted]   
)
// useEffect(
//     () => {
//         if (wineTypeId){
//             const wineTypesArray = varietalRegions.filter(varietal => varietal.varietal?.wineTypeId === wineTypeId)
//             setFilteredWines(wineTypesArray)
//         }
//         //  if (sorted === "body") {
//         //     const sortedBodyArray = varietalRegions.sort((a,b) => b.bodyId - a.bodyId)
//         //     setFilteredWines(sortedBodyArray)
//         // }
//         // if (sorted === "acidity") {
//         //     const sortedAcidityArray = varietalRegions.sort((a,b) => b.acidityId - a.acidityId)
//         //     setFilteredWines(sortedAcidityArray)
//         // }
//         // if (sorted === "dryness") {
//         //     const sortedDrynessArray = varietalRegions.sort((a,b) => b.drynessId - a.drynessId)
//         //     setFilteredWines(sortedDrynessArray)
//         // }
//         else {
// //for customers
//             setFilteredWines(varietalRegions)
     
// }
//     },
// [wineTypeId]   
// )



    return <>
    <h2 className="text-center p-6 text-secondary font-semibold text-4xl">The Library</h2>
    <div className="grid-cols-2 p-10  font-body">
    <div className="flex row justify-evenly">
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
    <div className="">
    <label>Sort by: </label>
    <select
    onChange={
        (evt) => {
            setSorted(evt.target.value)
        }}>
             <option id="none" value="none">Sort by Ascending</option>
            <option id="Body" value="body">Body</option>
            <option id="Acidity"value="acidity">Acidity</option>
            <option id="Dryness"value="dryness">Dryness</option>
    
       
    </select>

    </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
    {filteredWines.map(wine => <LibraryCard 
    wine={wine}/>)
                
}
    </div>
    </div>
    </>
}