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

    useEffect(() => {
        getCustomers()
            .then((data) => {
                let newData = data.filter((object) => object.id !== rabbitUserObject.id)
                setCustomers(newData)
            })
        getMessagesById(rabbitUserObject.id)
            .then((data) => {
                setMessages(data)

            })
    }, []
    )

    return (<>
        <h2 className="text-center p-6 text-secondary font-semibold text-4xl">The White Rabbit Community.</h2>
        <div className="w-full text-center  flex row justify-center gap-10 mx-auto p-5 ">
            <button onClick={() => navigate("/social/updateProfile")} className="btn bg-secondary">Update Profile</button>
            <button onClick={() => navigate("messages")} className="btn bg-secondary">My Messages ( {messages.length} )</button>
        </div>
        {/* <div className="fixed h-full w-full overflow-y-auto mt-10"> */}
        <div className="h-3/4 fixed overflow-y-auto md:static flex row flex-wrap justify-center pb-24"> 
            {customers.map((customer) => {
                return <Customer key={customer.id} customer={customer} />
            })}
        {/* </div> */}
        </div>
    </>
    )
}