import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet/src/layer/marker/Icon'
import { useNavigate, useParams } from "react-router-dom"
import { getFavorites, getVarietalRegionsById } from "../cellar/CellarProvider"
import { addToFavorites, Geocoding } from "./LibraryProvider"

export const CardDetails = () => {
    const { varietalRegionId } = useParams()
    const [favorites, setFavorites] = useState([])
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
            getFavorites()
            .then((data) => {
                setFavorites(data)
            })
        }, []
    )
   const ButtonOrNO = () => {
    favorites.map((favorite) => {
        if (favorite.varietalRegionId === varietalRegionId){
            return ""
        }
        else {
            
        }
    })
   }

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
        <div className="text-center">
            {rabbitUserObject.staff ? ""
                : <button className="btn bg-secondary m-6" onClick={() => addToFavorites(wineObject)}>Add to favorites</button>}

            <h2 className="text-4xl font-bold text-secondary">{wine?.region?.location} {wine.varietal?.name}</h2>
            <div>Country: {wine?.region?.country}</div>
        <div className="px-24">
                <div className="flex row justify-evenly py-10">
                <div className="badge uppercase p-4 bg-third"> {wine?.body?.density}</div>
                <div className="badge uppercase p-4 bg-third"> {wine?.acidity?.style}</div>
                <div className="badge uppercase p-4 bg-third">{wine?.dryness?.level}</div>
        </div>
                <div className="p-10 font-bold">About this wine: {wine?.varietal?.description}</div>
        </div>




            <div className="flex row h-full p-4">

            <div className="border-2 border-secondary">
            <img className="w-full h-full ml-auto mr-auto" src={wine?.varietal?.image} /> 
            </div>

            <div className="">
                <div id="map" className="mr-auto object-cover border-2 border-secondary">
                    { isLoading ? ""
                    : MyMapComponent()}</div>
            </div>
</div>

            
        </div>
    </>)
}