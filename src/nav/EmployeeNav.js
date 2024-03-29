import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getUserById } from "./NavProvider"
import {Dropdown} from "flowbite-react"
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

    return (<>
<nav className="bg-white hidden justify-between w-full md:flex items-center border-t-2 border-b-2 border-primary ">
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
        <nav className=" md:hidden p-3 border-primary rounded w-full fixed bg-third">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link className="flex  items-center" to="/home">
          <img src="https://i.pinimg.com/originals/9d/ea/ac/9deaacacdbc7066962eb35f4e513190a.jpg" className="h-16  mr-3 " alt="Logo" />
              <span className="text-xl font-semibold">white rabbit.</span>
          </Link>
          <Dropdown
    class="bg-none z-40"
     label={<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>}
    >
   
    
    <Dropdown.Item>
    <Link to="/library" className="block py-2 pl-3 pr-4 text-secondary rounded " aria-current="page">Library</Link>
  </Dropdown.Item>
  <Dropdown.Item>
    <Link to="/somm" className="block py-2 pl-3 pr-4 text-secondary rounded " aria-current="page">Mad Hatter</Link>
  </Dropdown.Item>
 
  <Dropdown.Item>
  <Link onClick={() => {
                localStorage.removeItem("rabbit_user")
                navigate("/", {replace: true})
            }} className="block py-2 pl-3 pr-4 text-secondary rounded " >Logout</Link> 
  </Dropdown.Item>
</Dropdown>
          {/* <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center  ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full" id="navbar-hamburger">
            <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
              <Link to="/library" className="block py-2 pl-3 pr-4 text-secondary rounded " aria-current="page">Library</Link>
              </li>
              <li>
              <Link to="/somm" className="block py-2 pl-3 pr-4 text-secondary rounded "  aria-current="page">Mad Hatter</Link> 
              </li>
              <li>
        <Link onClick={() => {
                localStorage.removeItem("rabbit_user")
                navigate("/", {replace: true})
            }} className="block py-2 pl-3 pr-4 text-secondary rounded " >Logout</Link> 
        </li>
            </ul>
          </div> */}
        </div>
      </nav>
      </>

    )
}


