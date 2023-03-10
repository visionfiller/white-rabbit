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
                setVarietalRegions(data)
            })
        },[]
    )

    const HandleClickSaveWineBottle =(event) => {
        event.preventDefault()
    if(wineBottle.name && wineBottle.vintage && wineBottle.varietalRegionId) {
        createWineBottle(wineBottle)
        .then(() => {
            navigate("/somm/createVarietalRegion")
        })
    }
        else{
            window.alert("Please fill in all fields")
        }
    
    
    }


    return(<>
     <div className="text-center border-4 border-dashed ml-10 mr-10 m-20 w-auto">
        <h2>Add a New Wine Bottle</h2>
    <form>
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
                                return (<option
                                    value={varietalRegion.id}>

                                    {varietalRegion.region?.location}, {varietalRegion.region?.country} - {varietalRegion.varietal.name} </option>)
                            }
                        )}
                    </select>
        </fieldset>
        
    </form>
    <button onClick={(event) => HandleClickSaveWineBottle(event) }className="btn" >Add Wine Bottle</button>
    </div>
    </>)
}