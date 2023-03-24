import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getUserById } from "./NavProvider"


export const EmployeeNav = () => {
    const navigate = useNavigate()
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
   const [foundUser,setFoundUser] = useState({})
   const[isLoading, setIsLoading] = useState(true)

useEffect(
    () => {
getUserById(rabbitUserObject.id)
.then((data) => {
    setFoundUser(data)
    setIsLoading(false)
})
    },[]
)

return (
<nav className="bg-white  w-screen flex items-center border-t-8 border-b-8 border-primary ">
<Link className="w-1/6 h-full flex flex-col items-center " to="/home">
      <img src="https://i.pinimg.com/originals/9d/ea/ac/9deaacacdbc7066962eb35f4e513190a.jpg" className="h-24  mr-3 " alt="Logo" />
      <span className=" text-left text-secondary text-3xl font-semibold whitespace-nowrap">white rabbit.</span>
  </Link>
<div className="container flex justify-between   pr-2">

  <div className=" bg-white  w-1/6 mx-auto flex items-center md:order-2">
    
        <img className="w-24 h-24 rounded-full mx-auto " src={foundUser.profilePicture} alt="user photo"/>
    </div>
    
    <div className=" bg-third   items-center justify-evenly flex w-full order-1" id="mobile-menu-2">
    <ul className="w-full flex row p-8 my-6 gap-10 rounded-lg justify-evenly">
      
      <li className="transform hover:scale-125  transition ease-out duration-300 ">
      <Link to="/library" className=" block py-2  text-white font-semibold text-2xl  hover:text-primary md:p-0" aria-current="page">Library</Link>
      </li>
      <li className="transform hover:scale-125  transition ease-out duration-300 ">
      <Link to="/somm" className=" block py-2  text-white font-semibold text-2xl  hover:text-primary md:p-0" aria-current="page">Mad Hatter
      </Link>
      </li>
     
    
     <li className="transform hover:scale-125  transition ease-out duration-300">
        <Link className="block py-2  text-white font-semibold text-2xl hover:text-primary md:p-0"  aria-current="page" onClick={() => {
                localStorage.removeItem("rabbit_user")
                navigate("/", {replace: true})
            }}>Logout</Link></li>
      
    </ul>
  </div>
   </div>
   

    </nav>
    
)
        }


       