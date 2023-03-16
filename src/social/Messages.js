import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getUsers } from "../cellar/CellarProvider"
import { deleteMessage, getMessagesById } from "./SocialProvider"

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
        return <div className="font-semibold text-center text-xl">{foundSender.fullName}</div>
}
    }
    
    const HandleDelete =(message) => {
        deleteMessage(message.id)
        .then(() => {
            getMessagesById(rabbitUserObject.id)
            .then((data) => {
                setReceivedMessages(data)
            })})
            
    }


    return(<>
    <h2 className="text-center p-6 text-secondary font-semibold text-4xl">Your Messages</h2>
    <ul className="flex row justify-evenly border-8 p-8 border-black bg-third w-3/5 mx-auto">
{receivedMessages.map((message) => {
    return  <li key={message.id} className="p-2 m-2 h-3/5 bg-yellow-200 shadow-xl hover hover:bg-yellow-100 rounded-sm">
        <div>{findSender(message)}</div>
        <div className="text-sm">{message.timeStamp}</div>
        <div className="m-6">{message.body}</div>
        <div className="flex row justify-between">
        <Link className="btn" to={`/social/reply/${message.senderUserId}`}>Reply</Link>
        
        <button onClick={() => HandleDelete(message)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
</div>
        </li>
        
})}
</ul>
    </>
    )
}