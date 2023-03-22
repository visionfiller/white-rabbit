import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getVarietalRegions } from "../library/LibraryProvider"
import { Wine } from "./Wine"

export const SearchedVarietalRegionList = ({ searchTermState }) => {
    const [varietalRegions, setVarietalRegions] = useState([])
    const [filteredWines, setFiltered] = useState([])
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const navigate = useNavigate()

    useEffect(
        () => {

                if (searchTermState) {
                    const searchedWines = varietalRegions.filter(varietalRegion => {
                        return varietalRegion.varietal?.name.toLowerCase().includes(searchTermState.toLowerCase()) && searchTermState.length > 2 || varietalRegion.region?.location.toLowerCase().includes(searchTermState.toLowerCase()) && searchTermState.length > 2 || varietalRegion.region?.country.toLowerCase().includes(searchTermState.toLowerCase()) && searchTermState.length > 2
                    })
                    setFiltered(searchedWines)
                }
                else{
                    setFiltered ([])
                }
           
        },
        [searchTermState]
    )


    useEffect(
        () => {
            getVarietalRegions()
                .then((wineArray) => {
                    setVarietalRegions(wineArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    return <>


        
        <article className="grid grid-cols-2 gap-10 w-1/2 p-10">

          
{
                filteredWines?.map(wine => {
                       return <Wine
                        wine={wine}
                        currentUser={rabbitUserObject}/>}


                    
                )
                    

            
                }

        </article>
    </>
}











