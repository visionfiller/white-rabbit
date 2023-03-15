import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createRegion } from "./SommProvider"

export const RegionForm = () => {
const [region, setRegion] = useState({})
const navigate = useNavigate()

const HandleClickSaveRegion =(event) => {
    event.preventDefault()
if(region.location && region.country) {
    createRegion(region)
    .then(() => {
        navigate("/somm/createVarietalRegion")
    })
}
    else{
        window.alert("Please fill in both fields")
    }


}


    return (<>
    <div className="text-center border-4 border-dashed ml-10 mr-10 m-20 w-auto">
        <h2>Add a New Wine Region</h2>
    <form>
        <fieldset>
            <div>
            <label>New Region Location</label>
            <input onChange={
                            (evt) => {
                                const copy = { ...region }
                                copy.location = evt.target.value
                                setRegion(copy)
                            }}
            className="pl-2" name="location" id="location" type="text" placeholder=" e.g. Rioja or Chablis"/>
            </div>
        </fieldset>
        <fieldset>
            <div>
            <label>Country of Region</label>
            <input 
            onChange={
                (evt) => {
                    const copy = { ...region }
                    copy.country = evt.target.value
                    setRegion(copy)
                }}
            className="pl-2" name="country" id="country" type="text" placeholder=" e.g. Spain or France"/>
            </div>
        </fieldset>
        <fieldset>
            <div>
            <label>City for Map</label>
            <input 
            onChange={
                (evt) => {
                    const copy = { ...region }
                    copy.geoCodeCity = evt.target.value
                    setRegion(copy)
                }}
            className="pl-2" name="geoCodeCity" id="country" type="text" placeholder=" e.g. Madrid or Paris"/>
            </div>
        </fieldset>
    </form>
    <button onClick={(clickEvent) => HandleClickSaveRegion(clickEvent)}>Add Region</button>
    </div>
    
    
    
    
    
    
    
    </>)
}