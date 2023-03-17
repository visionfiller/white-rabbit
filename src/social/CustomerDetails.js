import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getVarietalRegions } from "../library/LibraryProvider"
import { MessageForm } from "./MessageForm"
import { getCustomerById } from "./SocialProvider"

export const CustomerDetails = ({}) => {
    const {customerId} = useParams()
    const [ varietalRegions, setVarietalRegions] = useState([])
    const[foundCustomer, setFoundCustomer] = useState({})
    const navigate = useNavigate()
    const [messageForm, setMessageForm] = useState(false)
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
// const customerFavorites= varietalRegions.filter((varietalRegion) => foundCustomer.favorites.find((favorite) => favorite.varietalRegionId === varietalRegion.id))
    return(<>
    <div className="text-4xl text-center">{foundCustomer.fullName}'s Favorite Wines</div>
    <div className="w-full text-center p-10 flex row justify-center gap-10">
    {/* <Link className="btn" to={`/social/messageForm/${customerId}`}>Send a Message</Link> */}
    <button onClick={(event) => HandleMessageClick(event)} className="btn">Send {foundCustomer.fullName} a message</button>
        {messageForm ? <MessageForm foundCustomer={foundCustomer} closeButton={HandleMessageClose}/>
        : ""}
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {varietalRegions.map((wine) => {
        return <div className="card w-64 h-64 bg-slate-100 shadow-xl m-4">
        <div className="card-body p-2 m-2 h-full ">
        <Link className="" to={`/library/details/${wine.id}`}>
            <img className="h-36 w-full mx-auto object-cover" src={wine?.varietal?.image}/>
            </Link>
            <div className="card-title m-2 flex flex-col w-full">
                <div>{wine?.region?.location} {wine.varietal?.name}</div>
                <div className="text-sm">Country: {wine?.region?.country}</div>
                
            </div>
            
           
     </div>
        </div>
    })}
    </div>
    </>)
}