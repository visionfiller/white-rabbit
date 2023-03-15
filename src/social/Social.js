import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCustomers } from "../somm/SommProvider"
import { Customer } from "./Customer"
import { getMessagesById } from "./SocialProvider"

export const Social = () => {
    const [customers, setCustomers] = useState([])
    const navigate = useNavigate()
    const [messages, setMessages] = useState([])
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)

useEffect(
    () => {
        getCustomers()
        .then((data) => {
            setCustomers(data)
        })
    },[]
)
useEffect(
    () => {
        getMessagesById(rabbitUserObject.id)
        .then((data) => {
            setMessages(data)

        })
    },[]
)


    return(<>
    
   <h2 className="text-center p-6 text-secondary font-semibold text-4xl">The White Rabbit Community.</h2>
   <div className="w-full text-center p-10 flex row justify-center gap-10">
     <button onClick={()=> navigate("/social/updateProfile")} className="btn">Update Profile</button>
     <button onClick={()=> navigate("messages")} className="btn">My Messages ( {messages.length} )</button>
     </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {customers.map((customer) => {
    return <Customer key={customer.id} customer={customer}/>})}
    </div>
    </>)
}