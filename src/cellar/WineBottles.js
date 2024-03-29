
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getVarietalRegions } from "../library/LibraryProvider"
import { getFavorites, getMatchedWineBottlesbyVarietalRegionId } from "./CellarProvider"


export const MatchedWineBottles = ({rabbitUserObject}) => {
    const [wineBottles, setWineBottles] = useState([])
    const [favorites, setFavorites] = useState([])
    const [varietalRegions, setVarietalRegions] = useState ([])
    useEffect(
        ()=> {
            getFavorites(rabbitUserObject.id)
            .then((data)=> {
                setFavorites(data)
            })
        },[]
      
      )
      useEffect(
        () => {
            getVarietalRegions()
            .then((varietalRegionsArray) => {
                let favoriteRegions = varietalRegionsArray.filter(region => favorites.find((favorite) => favorite.varietalRegionId === region.id))
                setVarietalRegions(favoriteRegions)
            }
            )
          
        },[favorites]
      )
     

useEffect(
    () => {
        let array =[]
        varietalRegions.map((varietalRegion) => {
            array.push(getMatchedWineBottlesbyVarietalRegionId(varietalRegion.id))
        })
        Promise.all(array)
        .then((data) =>
        setWineBottles(data)
        )
    },[varietalRegions]

)
 const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

return (<>
<div className="flex flex-col w-full ">
<h2 className="text-2xl text-secondary font-semibold mx-auto">Some wines you may like...</h2>
<div className="h-5/6 w-full carousel carousel-vertical rounded-box mx-auto ">
{wineBottles ? wineBottles.map(wine => wine.map(bottle => {
return <Link href="#" onClick = {() => openInNewTab(bottle?.link)} key={bottle?.id} className="card carousel-item text-secondary m-6 " ><img className="h-48 w-auto object-contain px-2"src={bottle?.image} /><div className="text-center ">{bottle?.name}</div></Link>}))
: "No bottles of wine to recommend"} 


</div>
</div>

</>)
    }