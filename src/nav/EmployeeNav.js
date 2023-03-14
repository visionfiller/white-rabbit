import { Link, useNavigate } from "react-router-dom"


export const EmployeeNav = () => {
    const navigate = useNavigate()

return (

<>
<div className="flex row w-screen ">
<Link className="relative top-0 left-0 " to="/home">
            <img className="h-auto w-36" src="https://i.pinimg.com/originals/9d/ea/ac/9deaacacdbc7066962eb35f4e513190a.jpg"/>
</Link>
<ul className=" flex flex-row-reverse justify-evenly w-full my-auto mx-auto text-xl" >
        <li className=" transform hover:scale-125  transition ease-out duration-300">
            <Link to="" onClick={() => {
                localStorage.removeItem("rabbit_user")
                navigate("/", {replace: true})
            }}>Logout</Link>
            </li>
        
        <li className=" transform hover:scale-125  transition ease-out duration-300"><button onClick={() => navigate("")}>Community</button>
        </li>
        <li className=" transform hover:scale-125  transition ease-out duration-300"><button onClick={() => navigate("/somm")}>Sommelier</button>
        </li>
        <li className=" transform hover:scale-125  transition ease-out duration-300" ><button className="" onClick={() => navigate("/library")}>Library</button>
        </li>
        
</ul>
   </div>
    
    </>
)
        }