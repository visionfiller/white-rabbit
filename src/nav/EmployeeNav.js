import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getUserById } from "./NavProvider"


export const EmployeeNav = () => {
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

return (<>
<div className="font-semibold flex flex-row-reverse w-screen text-white text-2xl justify-evenly">
    <div className="bg-fourth absolute top-5 w-full p-10 -z-10"></div>
            <ul className=" flex flex-row-reverse justify-evenly w-full p-10 pl-5 ml-5 " >
                
        <li className="transform hover:scale-125  transition ease-out duration-300">
            <Link to="" onClick={() => {
                localStorage.removeItem("rabbit_user")
                navigate("/", {replace: true})
            }}>logout</Link>
            
            </li>
            <li className="transform hover:scale-125  transition ease-out duration-300" ><button onClick={() =>navigate("/somm")}>sommelier</button>
        </li>
        </ul>
        
        <Link className="w-1/5 text-center transform hover:scale-125  transition ease-out duration-300" to="/home">
            <img className="h-auto border-secondary border-8 w-24 text-center rounded-full" src="https://i.pinimg.com/originals/9d/ea/ac/9deaacacdbc7066962eb35f4e513190a.jpg"/>
         </Link>
         <ul className=" flex flex-row-reverse justify-evenly w-full p-10 pl-5 ml-5" >
        
        <li><button className="transform hover:scale-125  transition ease-out duration-300" onClick={() => navigate("/library")}>library</button>
        </li>
        
        
    </ul>
    
   </div>
  <img className="w-20 border-secondary border-4 left-0 top-0 object-cover absolute h-auto" src={foundUser.profilePicture}/>
    </>
)
        }


        /*
        */