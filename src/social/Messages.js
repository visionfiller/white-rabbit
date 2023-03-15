import { useEffect, useState } from "react"
import { getUsers } from "../cellar/CellarProvider"
import { getMessagesById } from "./SocialProvider"

export const Messages =()=> {
    const [users, setUsers] = useState([])
    const [receivedMessages, setReceivedMessages] = useState([])
    const [sentMessages, setSentMessages] = useState([])
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
useEffect(
    () => {
        getUsers()
        .then((data)=>{
            setUsers(data)
        })
        getMessagesById(rabbitUserObject.id)
        .then((data) => {
            setReceivedMessages(data)
        })

    },[]
)

const findSender = (message) => {
    if(users.length) {
        let foundSender=users.find(user => message.senderUserId === user.id)
        return <div className="font-semibold text-2xl">{foundSender.fullName}</div>
}
    }
    
    


    return(<>
    <h2 className="text-center p-6 text-secondary font-semibold text-4xl">Your Messages</h2>
    <ul className="flex row justify-evenly h-full">
{receivedMessages.map((message) => {
    return  <li key={message.id} className="p-8 m-4 h-3/5 bg-yellow-200 "><div>{findSender(message)}</div>
        <div>{message.body}</div>
        </li>
        
})}
</ul>
    </>
    )
}