import { useEffect, useState } from "react"
import { MapContainer, TileLayer } from 'react-leaflet'
import { useNavigate, useParams } from "react-router-dom"
import { getFavorites, getVarietalRegionsById } from "../cellar/CellarProvider"
import { addToFavorites, Geocoding } from "./LibraryProvider"

export const CardDetails = ({ wineDetails, HandleCardClose }) => {
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

    useEffect(() => {
            getVarietalRegionsById(wineDetails.id)
                .then((detail) => {
                    setWine(detail)
                })
            getFavorites(rabbitUserObject.id)
                .then((data) => {
                    setFavorites(data)
                })
        }, []
    )


    useEffect(() => {
            if (wine.regionId) {
                Geocoding(wine?.region?.geoCodeCity).then((geoCode) => {
                    let foundLat = geoCode?.hits[0]?.point?.lat.toFixed(2)
                    let foundLng = geoCode?.hits[0]?.point?.lng.toFixed(2)
                    setLat(foundLat)
                    setLng(foundLng)
                    setIsLoading(false)
                })
                    .then(() => MyMapComponent())
            }
        }, [wine]
    )

    const MyMapComponent = () => {
        return (<>
            {isLoading ? ""
                :
                <MapContainer center={[lat, lng]} zoom={8} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            }
        </>)
    }
    const IsFavorite = (wine) => {
        let foundFavorite = favorites.find((favorite) => favorite.varietalRegionId === wine.id)
        if (foundFavorite) {
            return ""
        }
        else { return <button className="btn-sm btn bg-secondary " onClick={() => addToFavorites(wineObject).then(() => getFavorites(rabbitUserObject.id).then((data) => setFavorites(data)))}>Add to favorites</button> }

    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const FindWineByName = (name) => {
        let url = `https://drizly.com/search?q=${name}`
        return url
    }
    
    return (<>
        <div className="fixed inset-0 z-20 backdrop-blur-sm ">
            
            <div className="p-2 m-6 md:mt-[50px] mt-[150px] overflow-y-auto flex flex-col md:flex md:flex-row mx-auto bg-slate-100 w-full h-1/2 md:h-3/4 md:w-3/4 rounded-lg border-2 border-primary">
               <button onClick={HandleCardClose} className="p-2 text-2xl font-semibold md:hidden text-right">X</button>
                <div className="flex flex-col w-full md:w-1/2 p-4">
                    
                        
                  <div className="mx-auto p-2">
                    <button onClick={() => openInNewTab(FindWineByName(wine.varietal.name))} className="mr-5 bg-red-700 btn btn-sm text-white">Find on Drizzly</button>
                    {rabbitUserObject.staff ? ""
                        : IsFavorite(wine)}
                    </div>
                    <h2 className="text-xl font-bold text-secondary">{wine?.region?.location} {wine.varietal?.name}</h2>
                    <div>Country: {wine?.region?.country}</div>
                    <div className="text-sm font-bold p-8">{wine?.varietal?.description}</div>
                    <div className="flex row justify-evenly">
                        <p className="badge bg-fifth ">{wine?.body?.density}</p>
                        <p className="badge  bg-fifth ">{wine?.acidity?.style}</p>
                        <p className="badge  bg-fifth ">{wine?.dryness?.level}</p>
                    </div>
                </div>
                <div className="w-3/4 md:p-8 md:m-8 md:w-1/2  my-auto">
                    <div id="map" className="object-cover w-full md:p-2 md:w-1/2 ">
                        {isLoading ? ""
                            : MyMapComponent()}
                    </div>
                </div>
                <div className="hidden md:block text-right p-2">
                            <button className="text-right text-2xl font-semibold"onClick={HandleCardClose}>X</button>
                            </div>
            </div>
            
        </div>
    </>)
}