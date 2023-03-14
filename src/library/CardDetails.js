import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet/src/layer/marker/Icon'
import { useNavigate, useParams } from "react-router-dom"
import { getVarietalRegionsById } from "../cellar/CellarProvider"
import { addToFavorites, Geocoding } from "./LibraryProvider"

export const CardDetails = () => {
    const { varietalRegionId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [wine, setWine] = useState({})
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
   


    const wineObject = {
        userId: rabbitUserObject.id,
        varietalRegionId: wine.id
    }
   
    useEffect(
        () => {
            getVarietalRegionsById(varietalRegionId)
                .then((detail) => {
                    setWine(detail)
                })
        }, []
    )
   

useEffect(
    ()=>{
        Geocoding(wine?.region?.geoCodeCity).then((geoCode)=> 
        {let foundLat = geoCode?.hits[0]?.point?.lat.toFixed(2)
            let foundLng = geoCode?.hits[0]?.point?.lng.toFixed(2)
            setLat(foundLat)
            setLng(foundLng)
            setIsLoading(false)})
            .then(() => MyMapComponent())
    },[wine]
)
    // const findCoordinates = () => {
    //     // const lat =""
    //     // const lng = ""
    //     Geocoding(wine?.region?.geoCodeCity)

    //         .then((geoCode) => {

                
    //         })

    // }



    // useEffect(
    //     () => {
    //         if (isLoading === false){
    //      MyMapComponent()
        
    //         }
    //     }, [isLoading]
    // )

    const MyMapComponent = () => {

        return (<>

            <MapContainer center={[lat, lng]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


            </MapContainer>

        </>)



    }


    return (<>
        <div className="text-center">
            {rabbitUserObject.staff ? ""
                : <button className="btn btn-accent" onClick={() => addToFavorites(wineObject)}>Add to favorites</button>}

            <div className="text-4xl font-bold">{wine?.region?.location} {wine.varietal?.name}</div>
            <div>Country: {wine?.region?.country}</div>
            <div className="p-5 flex row">
                <img className="w-1/2 h-auto ml-auto mr-auto" src={wine?.varietal?.image} />
                <div id="map" className="h-auto w-1/2 mr-auto">
                    { isLoading ? ""
                     :MyMapComponent()}</div>
            </div>
            <div>Body: {wine?.body?.density}</div>
            <div>Acidity: {wine?.acidity?.style}</div>
            <div>Dryness: {wine?.dryness?.level}</div>
            <div>About this wine: {wine?.varietal?.description}</div>
        </div>
    </>)
}