import { useState } from "react"
import { Link } from "react-router-dom"
import { CardDetails } from "../library/CardDetails"

export const Wine =({wine}) => {
    const [cardDetails, setCardDetails] = useState(false)

    const HandleCardClick = (event) => {
        event.preventDefault()
        setCardDetails(true)
    }
    const HandleCardClose = (event) => {
        event.preventDefault()
        setCardDetails(false)
    }
    
    return(<>
    <button onClick={(event) => HandleCardClick(event)} className="card w-64 h-64 bg-slate-100 shadow-xl m-2" >
 <div className="card-body p-1 mb-4 h-full ">
    <h2 className="card-title">{wine?.region?.location} {wine.varietal?.name}</h2>
    <div>Country: {wine?.region?.country}</div>
    <img className="h-36 w-full mx-auto object-cover" src={wine?.varietal?.image}/>
   
       </div>
        </button>
        {cardDetails ? <CardDetails wineDetails={wine} HandleCardClose={HandleCardClose} />
    : ""}
    </>)
}

