import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getVarietalRegions } from "../library/LibraryProvider"
import { createWineBottle } from "./SommProvider"

export const WineBottleForm = () => {
    const [wineBottle, setWineBottle] = useState({})
    const [varietalRegions, setVarietalRegions] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            
            getVarietalRegions()
            .then((data) => {
                let sortedVarietalRegions = data.sort((a, b) => (a.region.country > b.region.country ? 1 : (a === b ? 0 : -1)))
                setVarietalRegions(sortedVarietalRegions)
            })
        },[]
    )

    const HandleClickSaveWineBottle =(event) => {
        event.preventDefault()
    if(wineBottle.name && wineBottle.vintage && wineBottle.varietalRegionId && wineBottle.image && wineBottle.link) {
        createWineBottle(wineBottle)
        .then(() => {
            navigate("/somm")
        })
    }
        else{
            window.alert("Please fill in all fields")
        }
    
    
    }


    return(<>
     <h2 className="text-center p-6 text-secondary font-semibold text-4xl">Add a New Wine Bottle</h2>
       <div className="w-full h-screen flex row px-10  ">
        <form className="rounded text-center w-1/2 h-3/4 mx-auto my-10 border-primary border-2 p-16 flex flex-col justify-evenly items-center ">
    <fieldset>
            <label>Name of Wine</label>
            <input 
            onChange={
                (evt) => {
                    const copy = { ...wineBottle }
                    copy.name = evt.target.value
                    setWineBottle(copy)
                }}
            className="pl-2" name="name" id="name" type="text" placeholder="e.g. Les Petit Fers"/>
            
        </fieldset>
        <fieldset>
            <label>Wine Bottle Image</label>
            <input 
            onChange={
                (evt) => {
                    const copy = { ...wineBottle }
                    copy.image = evt.target.value
                    setWineBottle(copy)
                }}
            className="pl-2" name="name" id="name" type="text" placeholder="image URL"/>
            
        </fieldset>
        <fieldset>
            <label>Wine Vintage</label>
            <input 
            onChange={
                (evt) => {
                    const copy = { ...wineBottle }
                    copy.vintage = evt.target.value
                    setWineBottle(copy)
                }}
            className="pl-2" name="name" id="name" type="text" placeholder="e.g. 2019 or 2022"/>
            
        </fieldset>
        <fieldset>
            <label>Website URL</label>
            <input 
            onChange={
                (evt) => {
                    const copy = { ...wineBottle }
                    copy.link = evt.target.value
                    setWineBottle(copy)
                }}
            className="pl-2" name="name" id="name" type="text" placeholder="e.g.https://www.wines.com"/>
            
        </fieldset>
        <fieldset>
            <select
                    className=""
                        id="varietalRegion"
                        onChange={
                            (evt) => {
                                const copy = { ...wineBottle }
                                copy.varietalRegionId = parseInt(evt.target.value)
                                setWineBottle(copy)
                            }}>

                        <option name="varietalRegionId"> Choose Varietal Region...</option>
                        {varietalRegions.map(
                            (varietalRegion) => {
                                return (<option key={varietalRegion.id}
                                    value={varietalRegion.id}>

                                    {varietalRegion.region?.location}, {varietalRegion.region?.country} - {varietalRegion.varietal.name} </option>)
                            }
                        )}
                    </select>
        </fieldset>
        <button onClick={(event) => HandleClickSaveWineBottle(event) }className="btn" >Add Wine Bottle</button>
    </form>
    
    </div>
    </>)
}