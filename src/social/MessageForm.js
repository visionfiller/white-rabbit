import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUsers } from "../cellar/CellarProvider"

export const MessageForm = () => {
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const {customerId} = useParams()
    const [users, setUsers] = useState([])
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [message, setMessage] = useState({
        receiverUserId: parseInt(customerId),
        senderUserId: rabbitUserObject.id
    })
useEffect(
    () => {
        getUsers()
        .then((data) => {
            setUsers(data)
        })
    },[]
)

    return(<>
    
        <div className="text-center border-2 ml-10 mr-10 m-20 w-auto">
            <h2>Send a Message</h2>
        <form>
            <fieldset>
                <div>
                
                <textarea onChange={
                                (evt) => {
                                    const copy = { ...message }
                                    copy.body= evt.target.value
                                    setMessage(copy)
                                   
                                }}
                className="pl-2" name="body" id="body" type="text" placeholder="e.g. What was that wine we drank at Ashleys?"/>
                </div>
            </fieldset>
            
        </form>
    </div>
    </>)
}