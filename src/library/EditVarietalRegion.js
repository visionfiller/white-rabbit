import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getVarietalRegionsById } from "../cellar/CellarProvider"
import { getAcidities, getBodies, getDrynesses } from "../somm/SommProvider"
import { updateVarietalRegion } from "./LibraryProvider"

// export const EditVarietalRegion = () => {
//     const {varietalRegionId} = useParams()
//     const [varietalRegion, setVarietalRegion] = useState({})
//     const [ bodies, setBodies] = useState([])
//     const [acidities, setAcidities] = useState([])
//     const [drynesses, setDrynesses] = useState([])
//     const [isLoading, setIsLoading] = useState(true);
//     const [wineChange, setWineChange] = useState({})
//     const navigate = useNavigate()

// useEffect(
//     () => {
//         getVarietalRegionsById(varietalRegionId)
//         .then((object) => {
//             setVarietalRegion(object)
//             setIsLoading(false)
//         })
//     },[]
// )
// useEffect(
//     () => {
//         getBodies()
//         .then((data) => {
//             setBodies(data)
//         })
//         getAcidities()
//         .then((data) => {
//             setAcidities(data)
//         })
//         getDrynesses()
//         .then((data) => {
//             setDrynesses(data)
//         })
//     },[]
// )

// const HandleControlledInputChange = (event) => {
//     const newVarietalRegion = {...varietalRegion}
//     newVarietalRegion[event.target.name] = parseInt(event.target.value)
//     setVarietalRegion(newVarietalRegion)
// }

// const HandleSaveButton = () => {
// setIsLoading(true)
// if(varietalRegionId) {
//     updateVarietalRegion({
//         id: varietalRegion.id,
//         regionId: varietalRegion.regionId,
//         varietalId: varietalRegion.varietalId,
//         bodyId: varietalRegion.bodyId,
//         acidityId: varietalRegion.acidityId,
//         drynessId: varietalRegion.drynessId,

//     })
//     .then(()=> navigate(`/library/details/:varietalRegionId`))
// }

// }

//     return(<>
//      <form className="text-center float-center" border>
//             <h2 >Update Information for {varietalRegion.varietal?.name} in {varietalRegion.region?.location}</h2>

//             <fieldset>
//                 <div className="flex row p-4">
//                     <label className="pr-5" htmlFor="body">Body Type</label>
//                     <select name="bodyId" value={varietalRegion.bodyId} onChange={HandleControlledInputChange}>
//                         <option value="0">Select a new body type</option>
// {bodies.map((body) => {
//     return <option value={body.id}>{body.density}</option>
// })}
//                     </select>
                   
//                 </div>
//             </fieldset>

//             <fieldset>
//                 <div className="flex row p-4">
//                     <label className="pr-5" htmlFor="acidity">Acidity Level</label>
//                     <select name="acidityId" value={varietalRegion.acidityId} onChange={HandleControlledInputChange}>
//                         <option value="0">Select a new acidity level</option>
// {acidities.map((acidity) => {
//     return <option value={acidity.id}>{acidity.style}</option>
// })}
//                     </select>
                   
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="flex row p-4">
//                     <label className="pr-5" htmlFor="dryness">Dryness Level</label>
//                     <select name="drynessId" value={varietalRegion.drynessId} onChange={HandleControlledInputChange}>
//                         <option value="0">Select a new dryness level</option>
// {drynesses.map((dryness) => {
//     return <option value={dryness.id}>{dryness.level}</option>
// })}
//                     </select>
                   
//                 </div>
//             </fieldset>

//             <button  disabled={isLoading}
//           onClick={event => {
//             event.preventDefault() // Prevent browser from submitting the form and refreshing the page
//             HandleSaveButton()
//           }}>
//                Submit Changes to Varietal Region
//             </button>
//         </form>

//     </>)


// }