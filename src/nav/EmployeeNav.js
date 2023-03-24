import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getUserById } from "./NavProvider"

export const EmployeeNav = () => {
    const navigate = useNavigate()
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [foundUser, setFoundUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getUserById(rabbitUserObject.id)
            .then((data) => {
                setFoundUser(data)
                setIsLoading(false)
            })
    }, []
    )

    return (
        <nav className="bg-white  w-screen flex items-center border-t-8 border-b-8 border-primary ">
            <Link className="w-1/6 h-full flex flex-col items-center " to="/home">
                <img src="https://i.pinimg.com/originals/9d/ea/ac/9deaacacdbc7066962eb35f4e513190a.jpg" className="h-24  mr-3 " alt="Logo" />
                <span className=" text-left text-secondary text-3xl font-semibold whitespace-nowrap">white rabbit.</span>
            </Link>
            <div className="container flex justify-between">
  <div className=" bg-third  w-1/6 mx-auto flex items-center md:order-2">
  <div className="group h-24 w-24  [perspective:1000px]">
    <div className="relative h-full w-full rounded-full shadow transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <img className="h-full w-full rounded-full object-cover " src={foundUser.profilePicture} alt="user photo"/>
      </div>

      <div className="absolute inset-0 h-24 w-24 rounded-full bg-secondary/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full rounded-full flex-col items-center justify-center">
        <Link className="block  text-white font-semibold text-xl"  aria-current="page" onClick={() => {
                localStorage.removeItem("rabbit_user")
                navigate("/", {replace: true})
            }}>Logout</Link>
        </div>
      </div>
    </div>
    </div>

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
                        
                    </ul>
                </div>
            </div>
        </nav>

    )
}


