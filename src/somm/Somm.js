import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getVarietalRegionsById } from "../cellar/CellarProvider"
import { getVarietalRegions } from "../library/LibraryProvider"
import { MessageForm } from "../social/MessageForm"
import { getMessagesById } from "../social/SocialProvider"
import { getCustomers, getWineBottles } from "./SommProvider"

export const Somm = () => {
const [wineBottles, setWineBottles] = useState([])
const [varietalRegions, setVarietalRegions] = useState({})
const [customers, setCustomers] = useState([])
const [messages, setMessages] = useState([])
const [messageForm, setMessageForm] = useState(false)
const [foundCustomer, setFoundCustomer] =useState({})
const navigate = useNavigate()
const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)

useEffect(
    ()=>{
        getCustomers()
        .then((customerArray) => {
            setCustomers(customerArray)
        })

        getWineBottles()
        .then((data) => {
            setWineBottles(data)
       
        })
        getVarietalRegions()
        .then((data) => {
            setVarietalRegions(data)
        })
        getMessagesById(rabbitUserObject.id)
        .then((data) => {
            setMessages(data)
        })
    },[]
    )
    const HandleMessageClick = (event,customer) => {
        event.preventDefault()
        setMessageForm(true)
        setFoundCustomer(customer)
    }
    const HandleMessageClose=() => {
       
        setMessageForm(false)
    }

   

const findVarietal = (bottle) => {
    let foundVarietal = varietalRegions.find(varietalRegion => varietalRegion.id === bottle.varietalRegionId)

    return(
    <div>{foundVarietal.varietal?.name}</div>
    )
}
const findRegion = (bottle) => {
    let foundRegion = varietalRegions.find(varietalRegion => varietalRegion.id === bottle.varietalRegionId)

    return(
    <div>{foundRegion.region?.location}, {foundRegion.region?.country}</div>
    )
}




const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
// const FindWineVarietal = (bottle) => {
//     getVarietalRegionsById(bottle.varietalRegionId)
//     .then((data) => {
// return <div>{data.varietal.name}</div>
//     })
// }



    return <>
    <div className="w-full text-center h-screen p-6 ">
        
  

<div className=" flex row w-full p-4 justify-evenly">
        <Link className="btn  bg-secondary" to="/somm/createVarietalRegion">Assign a new Varietal Region</Link>
        <Link className="btn bg-secondary "to="/somm/createWineBottle">Add new Wine Bottle</Link>
        <Link className="btn bg-secondary" to="/sommMessages">My Messages ( {messages.length} )</Link>
     </div>
   
<div className="flex row w-full h-full justify-between">
    

    <div className="flex flex-col h-full ml-0">
<h2 className="pb-6 text-3xl text-center font-bold leading-none text-secondary dark:text-white">White Rabbit Customers</h2>
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-secondary shadow-xl sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    
    
    <div className="flow-root">
    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        
       
        {
        customers.map((customer) => {
        return <li key={customer.id} className="py-3 px-4 sm:py-4   w-full">
            <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
            <button onClick={(event) => HandleMessageClick(event, customer)} className=""> <img className="w-16 h-16 rounded-full" src={customer.profilePicture}/></button>
        {messageForm ? <MessageForm foundCustomer={foundCustomer} closeButton={HandleMessageClose}/>
        : ""}
                       
                    </div>
            <div className="flex-1 min-w-0">
                        <p className=" font-medium text-gray-900  truncate dark:text-white">
                           {customer.fullName}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {customer.email}
                        </p>
                    </div>
                 <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {customer.favorites?.length}
                    </div>
                    </div>
            
            </li>})
        }
         
     </ul>
    </div>
    </div>
     </div>

        <div className="  pt-6 h-full">
        <h2 className="pb-6 text-3xl text-center font-bold leading-none text-secondary dark:text-white">Wines In Our Cellar</h2>
        <div className="grid mb-8 w-full  p-4 bg-white border border-gray-200 rounded-lg shadow-secondary shadow-xl sm:p-8 dark:bg-gray-800 dark:border-gray-700 md:mb-12 md:grid-cols-2">
 
        {wineBottles.map((bottle) => {
            return  <Link className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700" href="#" onClick = {() => openInNewTab(bottle?.link)}><figure key={bottle.id} className="">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <div key={bottle?.id} className="text-lg font-semibold text-gray-900 dark:text-white">{bottle.name}</div>
        
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-12 h-12" src={bottle.image} alt="wine bottle"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
            <div className="my-4 font-light">{varietalRegions.length ? findVarietal(bottle)
        : ""}</div>
         <div className="text-sm font-light text-gray-500 dark:text-gray-400">{varietalRegions.length ? findRegion(bottle)
                : ""}</div>
                
            </div>
        </figcaption>    
    </figure>
    </Link>
    })
     
    
        }
        

        
        
            </div>
        </div>
        </div>
       </div>
        </>
}