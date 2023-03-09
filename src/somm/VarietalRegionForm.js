import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createNewVarietalRegion, getAcidities, getAcidityById, getBodies, getBodiesById, getDrynessById, getDrynesses, getRegions, getRegionsById, getVarietalById, getVarietals } from "./SommProvider"

export const VarietalRegionForm = () => {
    const [varietals, setVarietals] = useState([])
    const [displayVarietalHTML, setDisplayVarietal] = useState([])
    const [regions, setRegions] = useState([])
    const [displayRegionHTML, setDisplayRegion] = useState([])
    const [bodies, setBody] = useState([])
    const [displayBodyHTML, setDisplayBody] = useState([])
    const [acidities, setAcidity] = useState([])
    const [displayAcidityHTML, setDisplayAcidity] = useState([])
    const [drynesses, setDryness] = useState([])
    const [displayDrynessHTML, setDisplayDryness] = useState([])
    const [newVarietalRegion, update] = useState({})
    const navigate = useNavigate()

useEffect(
    () => {
DisplayVarietal()
DisplayRegion()
DisplayBody()
DisplayAcidity()
DisplayDryness()

    },[newVarietalRegion]
)

    const DisplayVarietal =() => {
        if( newVarietalRegion.varietalId) {
            getVarietalById(newVarietalRegion.varietalId)
            .then((varietal) => {
               console.log(varietal)
               setDisplayVarietal (<>
                <div>{varietal.name}</div>
                </>)
            
            })
        }
        else {
            setDisplayVarietal("")
        }

    }
    const DisplayRegion =() => {
        if( newVarietalRegion.regionId) {
            getRegionsById(newVarietalRegion.regionId)
            .then((region) => {
              
               setDisplayRegion (<>
                <div>{region.location}, {region.country}</div>
                </>)
            
            })
        }
        else {
            setDisplayRegion("")
        }

    }
    const DisplayBody =() => {
        if( newVarietalRegion.bodyId) {
            getBodiesById(newVarietalRegion.bodyId)
            .then((body) => {
                setDisplayBody
               (<>
                <div>{body.density}</div>
                </>)
            
            })
        }
        else {
            setDisplayBody("")
        }

    }
    const DisplayAcidity =() => {
        if( newVarietalRegion.acidityId) {
            getAcidityById(newVarietalRegion.acidityId)
            .then((acidity) => {
                setDisplayAcidity
               (<>
                <div>{acidity.style}</div>
                </>)
            
            })
        }
        else {
            setDisplayAcidity("")
        }

    }
    const DisplayDryness =() => {
        if( newVarietalRegion.drynessId) {
            getDrynessById(newVarietalRegion.drynessId)
            .then((dryness) => {
                setDisplayDryness
               (<>
                <div>{dryness.level}</div>
                </>)
            
            })
        }
        else {
            setDisplayDryness("")
        }

    }



    useEffect(
        () => {
            getVarietals()
                .then((data) => setVarietals(data))
            getRegions()
                .then((data) => setRegions(data))
            getBodies()
                .then((data) => setBody(data))
            getAcidities()
                .then((data) => setAcidity(data))
            getDrynesses()
                .then((data) => setDryness(data))


        }, []
    )
  
    const handleSaveButton = (event) => {
        event.preventDefault()

      createNewVarietalRegion(newVarietalRegion)
            .then(() => {
                navigate("/somm")
            })

    }

    return <>
        <div className="flex row justify-evenly p-10 m-10">
        <form>
            <h2>Create a new Varietal Region</h2>
            <fieldset>
                <div className="flex flex-col" >
                    <select
                        id="varietal"
                        onChange={
                            (evt) => {
                                const copy = { ...newVarietalRegion }
                                copy.varietalId = parseInt(evt.target.value)
                                update(copy)
                            }}>

                        <option name="varietal"> Choose a varietal...</option>
                        {varietals.map(
                            (varietal) => {
                                return (<option
                                    value={varietal.id}>

                                    {varietal.name} </option>)
                            }
                        )}
                    </select>
                    <button
                    onClick={() => navigate("/somm/createVarietalRegion/createVarietal")}
                    >+ New Varietal</button>
                </div>
            </fieldset>
            <fieldset>
                <div className="flex flex-col" >
                    <select
                        id="region"
                        onChange={
                            (evt) => {
                                const copy = { ...newVarietalRegion }
                                copy.regionId = parseInt(evt.target.value)
                                update(copy)
                            }}>

                        <option name="region"> Choose wine region...</option>
                        {regions.map(
                            (region) => {
                                return (<option
                                    value={region.id}>

                                    {region.location}, {region.country} </option>)
                            }
                        )}
                    </select>
                    <button
                    onClick={() => navigate("/somm/createVarietalRegion/createRegion")}
                    >+ New Region</button>
                </div>
            </fieldset>
            <fieldset>
                <div >
                    <select
                        id="body"
                        onChange={
                            (evt) => {
                                const copy = { ...newVarietalRegion }
                                copy.bodyId = parseInt(evt.target.value)
                                update(copy)
                            }}>

                        <option name="body"> Choose body type</option>
                        {bodies.map(
                            (body) => {
                                return (<option
                                    value={body.id}>

                                    {body.density} </option>)
                            }
                        )}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div >
                    <select
                        id="dryness"
                        onChange={
                            (evt) => {
                                const copy = { ...newVarietalRegion }
                                copy.drynessId = parseInt(evt.target.value)
                                update(copy)
                            }}>

                        <option name="dryness"> Choose dryness level...</option>
                        {drynesses.map(
                            (dryness) => {
                                return (<option
                                    value={dryness.id}>

                                    {dryness.level} </option>)
                            }
                        )}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div >
                    <select
                        id="acidity"
                        onChange={
                            (evt) => {
                                const copy = { ...newVarietalRegion }
                                copy.acidityId = parseInt(evt.target.value)
                                update(copy)
                            }}>

                        <option name="acidity"> Choose acid level...</option>
                        {acidities.map(
                            (acidity) => {
                                return (<option
                                    value={acidity.id}>

                                    {acidity.style} </option>)
                            }
                        )}
                    </select>
                </div>
            </fieldset>
            <button onClick={(clickEvent) => handleSaveButton(clickEvent)}>Create New Varietal Region</button>
        </form>
        

<div className="card">
    {newVarietalRegion ? displayVarietalHTML
: "" }
 {newVarietalRegion ? displayRegionHTML
: "" }
{newVarietalRegion ? displayBodyHTML
: "" }
{newVarietalRegion ? displayDrynessHTML
: "" }
{newVarietalRegion ? displayAcidityHTML
: "" }
</div>
</div>
    </>
}