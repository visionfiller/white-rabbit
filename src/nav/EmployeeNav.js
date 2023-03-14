import { Link, useNavigate } from "react-router-dom"


export const EmployeeNav = () => {
    const navigate = useNavigate()

return (

<>
<div className="flex row w-screen">
   <Link className="pr-10 pl-10 pt-2 border-b border-r border-black" to="/home">
            <img className="h-auto w-20" src="https://i.pinimg.com/originals/9d/ea/ac/9deaacacdbc7066962eb35f4e513190a.jpg"/>
            </Link>
            <ul className=" flex flex-row-reverse justify-between w-full p-10 pl-5 ml-5" >
        <li>
            <Link to="" onClick={() => {
                localStorage.removeItem("rabbit_user")
                navigate("/", {replace: true})
            }}>Logout</Link>
            </li>
        
        <li ><button onClick={() => navigate("")}>Community</button>
        </li>
        <li ><button onClick={() => navigate("/somm")}>Sommelier</button>
        </li>
        <li className=" transform hover:scale-125  transition ease-out duration-300" ><button className="" onClick={() => navigate("/library")}>Library</button>
        </li>
        
    </ul>
   </div>
    
    </>
)
        }