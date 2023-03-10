import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getWineTypes } from "../library/LibraryProvider"
import { createVarietal } from "./SommProvider"

export const VarietalForm = () => {
    const [varietal, setVarietal] = useState({})
    const navigate = useNavigate()
    const [wineTypes, setWineTypes] = useState([])

    useEffect(
        ()=> {
            getWineTypes()
            .then((data) => {
                setWineTypes(data)
            })


        }
    )
    
    const HandleClickSaveVarietal =(event) => {
        event.preventDefault()
    if (varietal.image && varietal.name && varietal.description && varietal.wineTypeId ){
        createVarietal(varietal)
        .then(() => {
            navigate("/somm/createVarietalRegion")
        })

    }
        else{
            window.alert("Please fill in all fields")
        }
    
    }
    
    
    
    
    
    
    
    
    
    
    
        return (<>
        <div className="text-center border-4 border-dashed ml-10 mr-10 m-20 w-auto">
            <h2>Add a New Varietal</h2>
        <form>
            <fieldset>
                <div>
                <label>Varietal Name</label>
                <input onChange={
                                (evt) => {
                                    const copy = { ...varietal }
                                    copy.name= evt.target.value
                                    setVarietal(copy)
                                }}
                className="pl-2" name="name" id="name" type="text" placeholder=" e.g. Chardonnay or Pinot Noir"/>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Upload an Image</label>
                    <input 
                    onChange={
                        (evt) => {
                            const copy = { ...varietal }
                            copy.image = evt.target.value
                            setVarietal(copy)
                        }}
                    type="text" className="pl-2" name="image" id="image" placeholder=" e.g a jpeg or png file"/>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Description of the wine</label>
                    <textarea 
                    onChange={
                        (evt) => {
                            const copy = { ...varietal }
                            copy.description= evt.target.value
                            setVarietal(copy)
                        }}
                    className="pl-2" name="description" id="description" placeholder="Tell us all about this varietal"/>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Wine Type</label>
                    <select
                    onChange={
                        (evt) => {
                            const copy = { ...varietal }
                            copy.wineTypeId= parseInt(evt.target.value)
                            setVarietal(copy)
                        }}>
                    {wineTypes.map((type) => {
                        return <option id={type.id} value={type.id}>{type.type}</option>
                    })}
                    </select>
                </div>
            </fieldset>
            
            
        </form>
        <button onClick={(clickEvent) => HandleClickSaveVarietal(clickEvent)}>Add Varietal</button>
        </div>
        
        
        
        
        
        
        
        </>)
    }