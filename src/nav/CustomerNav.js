import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getMessagesById } from "../social/SocialProvider"
import { getUserById } from "./NavProvider"


export const CustomerNav = () => {
    const navigate = useNavigate()
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
   const [foundUser,setFoundUser] = useState({})

useEffect(
    () => {
getUserById(rabbitUserObject.id)
.then((data) => {
    setFoundUser(data)
})
    },[]
)

return (
   
<>
   <div className="font-semibold flex flex-row-reverse w-screen text-white text-2xl justify-evenly">
    <div className="bg-fourth absolute top-5 w-full p-10 -z-10"></div>
            <ul className=" flex row justify-evenly w-full p-10 pl-5 ml-5 " >
       <li className="transform hover:scale-125  transition ease-out duration-300" ><button onClick={() => navigate("/social")}>social</button></li>
        <li className="transform hover:scale-125  transition ease-out duration-300" ><button onClick={() => navigate("/like")}>will I like it?</button>
        </li>
        <li className="transform hover:scale-125  transition ease-out duration-300">
            <Link to="" onClick={() => {
                localStorage.removeItem("rabbit_user")
                navigate("/", {replace: true})
            }}>logout</Link>
            </li>
            <li></li>
        </ul>
        
        <Link className="w-1/5 text-center transform hover:scale-125  transition ease-out duration-300" to="/home">
            <img className="h-auto border-secondary border-8 w-24 text-center rounded-full" src="https://i.pinimg.com/originals/9d/ea/ac/9deaacacdbc7066962eb35f4e513190a.jpg"/>
         </Link>
         <ul className=" flex flex-row-reverse justify-evenly w-full p-10 pl-5 ml-5" >
         <li><button className="transform hover:scale-125  transition ease-out duration-300" onClick={() => navigate("/chat")}>chat with us</button></li>
        <li className="transform hover:scale-125  transition ease-out duration-300" ><button onClick={() => navigate("/cellar")}>wine cellar</button>
        </li>
        <li><button className="transform hover:scale-125  transition ease-out duration-300" onClick={() => navigate("/library")}>library</button>
        </li>
        
    </ul>
   </div>
   <img className="w-14 border-secondary border-4 right-2 top-6 object-cover absolute h-auto" src={foundUser.profilePicture}/>
    
    </>
)
        }