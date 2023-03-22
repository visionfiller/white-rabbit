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
            let newData = data.filter((object) => object.id !== rabbitUserObject.id)
            setCustomers(newData)
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
    <img className="h-screen w-full object-cover opacity-5 absolute right-0  b-blur-xl -z-10 " src="https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg"/>
   <h2 className="text-center p-6 text-secondary font-semibold text-4xl">The White Rabbit Community.</h2>
   <div className="w-full text-center  flex row justify-center gap-10 mx-auto  ">
     <button onClick={()=> navigate("/social/updateProfile")} className="btn bg-secondary">Update Profile</button>
     <button onClick={()=> navigate("messages")} className="btn bg-secondary">My Messages ( {messages.length} )</button>
     </div>
    <div className="flex row flex-wrap justify-center  pb-10">
    {customers.map((customer) => {
    return <Customer key={customer.id} customer={customer}/>})}
    </div>
    </>
    )
}