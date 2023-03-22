import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CardDetails } from "../library/CardDetails"
import { getVarietalRegions } from "../library/LibraryProvider"
import { WillILikeItSearchContainer } from "../likeit/LikeItContainer"

export const Recommendations =({favorites }) => {
    const [varietalRegions, setVarietalRegions]= useState([])
    const [cardDetails, setCardDetails] = useState(false)
    const[wineObject, setWineObject] = useState({})
    useEffect(
        () => {
            getVarietalRegions()
            .then((data) => {
                setVarietalRegions(data)
            })
        },[]
    )
    const HandleCardClick = (event,wine) => {
        event.preventDefault()
        setCardDetails(true)
        setWineObject(wine)
    }
    const HandleCardClose = (event) => {
        event.preventDefault()
        setCardDetails(false)
    }
    



    let array = varietalRegions.filter((region) => favorites.find((favorite=> favorite.varietalRegion?.acidityId === region.acidityId && favorite.varietalRegion?.drynessId === region.drynessId && favorite.varietalRegion?.bodyId === region.bodyId )))
    let newArray = array.filter(wine => favorites.every(favorite => favorite.varietalRegionId !== wine.id))
   
    return (<>
    <div className="flex flex-col w-full mr-8">
    <div className="flex row">
    <h2 className="text-2xl text-secondary font-semibold ">Try these different varietal regions!</h2>
   
     </div>
    <div className="flex  w-full p-10 justify-evenly">

  <div className="w-full grid grid-cols-2">
  { newArray.length ? 
  newArray.map((wine) => {
    return (<div key={wine.id}>
    
    <button onClick={(event) => HandleCardClick(event,wine)}key={wine.id} id={wine.id}  className="badge badge-sm bg-white border-none  font-semibold p-8  m-4 w-full transform hover:scale-125  transition ease-out duration-300">
    
    {wine.varietal.wineTypeId === 2 ?<><div className="inline-block absolute w-full mx-auto text-lg text-secondary">{wine.region?.location} {wine.varietal?.name}</div><img src="https://www.onlygfx.com/wp-content/uploads/2017/04/yellow-paint-brush-stroke-9-300x122.png" className="w-full" /></>
    :<> <div className="inline-block absolute w-full mx-auto text-lg">{wine.region?.location} {wine.varietal?.name}</div><img src="https://th.bing.com/th/id/OIP.xw5RUOkCJuQNxKkQw8YVHQHaC2?pid=ImgDet&rs=1" className="w-full" /></>
  }
    </button>
    {cardDetails ? <CardDetails wineDetails={wineObject} HandleCardClose={HandleCardClose}/>
            : "" }
        </div>)
  })
  : <div>Please add more favorites</div>}
  </div>
 
  </div>
  </div>
    </>)
}