import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet/src/layer/marker/Icon'
import { useNavigate, useParams } from "react-router-dom"
import { getFavorites, getVarietalRegionsById } from "../cellar/CellarProvider"
import { addToFavorites, Geocoding } from "./LibraryProvider"

export const CardDetails = ({wineDetails,HandleCardClose}) => {
    const { varietalRegionId } = useParams()
    const [favorites, setFavorites] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [wine, setWine] = useState({})
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    const navigate = useNavigate()
    const wineObject = {
        userId: rabbitUserObject.id,
        varietalRegionId: wine.id
    }
   

    useEffect(
        () => {
            getVarietalRegionsById(wineDetails.id)
                .then((detail) => {
                    setWine(detail)
                })
            getFavorites()
            .then((data) => {
                setFavorites(data)
            })
        }, []
    )


useEffect(
    ()=>{
        if (wine.regionId) {
        Geocoding(wine?.region?.geoCodeCity).then((geoCode)=> 
        {let foundLat = geoCode?.hits[0]?.point?.lat.toFixed(2)
            let foundLng = geoCode?.hits[0]?.point?.lng.toFixed(2)
            setLat(foundLat)
            setLng(foundLng)
            setIsLoading(false)})
            .then(() => MyMapComponent())
        }
    },[wine]
)
    

    const MyMapComponent = () => {

        return (<>
       { isLoading ? "" 
       :
            <MapContainer center={[lat, lng]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


            </MapContainer>
    }
        </>)



    }


    return (<>
    <div className="fixed inset-0 z-20  backdrop-blur-sm ">
    
    <div className="flex row mx-auto my-auto bg-slate-100 w-4/5 h-3/5 border-black border-4">
        <div className="w-1/2 my-auto">
        <div id="map" className="object-contain w-1/2 ">
                    { isLoading ? ""
                    : MyMapComponent()}
            </div>
       
    </div>
            <div className="w-1/2 p-4">
            <div className="text-right">
        <button onClick={HandleCardClose}>Close</button>
    </div>
            {rabbitUserObject.staff ? ""
                : <button className="btn-sm btn bg-secondary " onClick={() => addToFavorites(wineObject).then(()=>navigate("/cellar"))}>Add to favorites</button>}

            <h2 className="text-xl font-bold text-secondary">{wine?.region?.location} {wine.varietal?.name}</h2>
            <div>Country: {wine?.region?.country}</div>
       
                <div className="text-sm font-bold">About this wine: {wine?.varietal?.description}</div>
        <div className="flex row justify-evenly">
            <p className="badge bg-fifth ">{wine?.body?.density}</p>
            <p className="badge  bg-fifth ">{wine?.acidity?.style}</p>
            <p className="badge  bg-fifth ">{wine?.dryness?.level}</p>
        </div>
             

</div>
          

           
               
          
</div>

            </div>
            
        
    </>)
}