
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getVarietalRegions } from "../library/LibraryProvider"
import { getFavorites, getMatchedWineBottlesbyVarietalRegionId } from "./CellarProvider"

// export const WineBottles = ({favorites}) => {
// const [matchedWineBottles, setMatchedWineBottles] = useState([])
// const [varietalRegions, setVarietalRegions] = useState([])
// useEffect(
// () => {
//     getVarietalRegions()
//     .then((data) => {
//       let foundVarietalRegions = data.filter(varietalRegion => favorites.find((favorite) => favorite.varietalRegionId === varietalRegion.id))
//         setVarietalRegions(foundVarietalRegions)
//     })

// },[favorites]
// )

// useEffect(
//     () => { 

//         setMatchedWineBottles(MatchedWineBottles(varietalRegions))

//     },[varietalRegions]
// )
// const MatchedWineBottles =(varietalRegions) => {
//     let bottleArray = []
//     varietalRegions.map((varietalRegion) => {
//         getMatchedWineBottles(varietalRegion.varietal.name)
//         .then((data) => {
//             bottleArray.push(data)
//         })
//     })
//     return bottleArray
// }
//     return(<>
//     {console.log(matchedWineBottles)}
    
//     </>)
// }



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
<h2 className="text-2xl text-secondary font-semibold">Some wines you may like...</h2>
<div className="flex row flex-wrap justify-start ">
{wineBottles ? wineBottles.map(wine => wine.map(bottle => {
return <Link href="#" onClick = {() => openInNewTab(bottle?.link)} key={bottle?.id} className="card  text-secondary m-6 ransform hover:scale-125  transition ease-out duration-300" ><div className="text-center ">{bottle?.name}</div><img className="h-48 w-auto object-contain px-2"src={bottle?.image} /></Link>}))
: "No bottles of wine to recommend"} 


</div>
</div>

</>)
    }