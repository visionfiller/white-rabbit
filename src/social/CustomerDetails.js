import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { CardDetails } from "../library/CardDetails"
import { getVarietalRegions } from "../library/LibraryProvider"
import { MessageForm } from "./MessageForm"
import { getCustomerById } from "./SocialProvider"

export const CustomerDetails = ({}) => {
    const {customerId} = useParams()
    const [ varietalRegions, setVarietalRegions] = useState([])
    const[foundCustomer, setFoundCustomer] = useState({})
    const navigate = useNavigate()
    const [messageForm, setMessageForm] = useState(false)
    const [cardDetails, setCardDetails] = useState(false)
    const [foundWine,setFoundWine] = useState({})
useEffect(
    () => {
        if (customerId) {
        getCustomerById(customerId)
        .then((data) => {
            setFoundCustomer(data)
        })
        
    }
    },[customerId]
)
useEffect(
    () => {
        if(foundCustomer.id) {
            getVarietalRegions()
        .then((data) => {
            let newData = data.filter(varietalRegion => foundCustomer.favorites.find((favorite) => favorite.varietalRegionId === varietalRegion.id))
            setVarietalRegions(newData)
        })
        }
    },[foundCustomer]
)
const HandleMessageClick = (event) => {
    event.preventDefault()
    setMessageForm(true)
}
const HandleMessageClose=() => {
   
    setMessageForm(false)
}
const HandleCardClick = (event,wine) => {
    event.preventDefault()
    setCardDetails(true)
    setFoundWine(wine)
}
const HandleCardClose = (event) => {
    event.preventDefault()
    setCardDetails(false)
}
// const customerFavorites= varietalRegions.filter((varietalRegion) => foundCustomer.favorites.find((favorite) => favorite.varietalRegionId === varietalRegion.id))
    return(<>
        <img className="h-screen w-full object-cover opacity-5 absolute right-0  b-blur-xl -z-10 " src="https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg"/>
        <div className="text-right p-3"><button className="btn bg-secondary" onClick={() => navigate("/social")}>Back to WR Community</button></div>
    <div className="text-4xl text-center p-8">{foundCustomer.fullName}'s Favorite Wines</div>
    
    <div className="w-full text-center p-10 flex row justify-center gap-10">
    {/* <Link className="btn" to={`/social/messageForm/${customerId}`}>Send a Message</Link> */}
    <button onClick={(event) => HandleMessageClick(event)} className="btn bg-secondary">Send {foundCustomer.fullName} a message</button>
        {messageForm ? <MessageForm foundCustomer={foundCustomer} closeButton={HandleMessageClose}/>
        : ""}
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {varietalRegions.map((wine) => {
        return <div className="card w-64 h-64 bg-slate-100 shadow-xl m-4">
        <div className="card-body p-2 m-2 h-full ">
        <button className="" onClick={(event) => HandleCardClick(event,wine)}>
            <img className="h-36 w-full mx-auto object-cover" src={wine?.varietal?.image}/>
            </button>
            <div className="card-title m-2 flex flex-col w-full">
                <div>{wine?.region?.location} {wine.varietal?.name}</div>
                <div className="text-sm">Country: {wine?.region?.country}</div>
                
            </div>
            
           
     </div>
        </div>
    })}
    {cardDetails? <CardDetails wineDetails={foundWine} HandleCardClose={HandleCardClose} />
    : ""}
    </div>
    </>)
}