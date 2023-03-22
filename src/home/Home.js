import { useEffect, useState } from "react"
import { LoginVideo } from "../auth/LoginVideo"
import { getVarietalRegions } from "../library/LibraryProvider"
import { SearchedContainer } from "./SearchContainer"
import ReactPlayer from 'react-player'
import { useNavigate } from "react-router-dom"

export const Home = () => {
    // const [video,setVideo] = useState(true)



//  const HandleClose =() => {
//     setVideo(false)

// }

    return <>
    <div className="flex row h-screen">
    <div className=" h-screen w-3/4 ">
    <h2 className="text-8xl text-left text-secondary p-20">Let's talk about wine!</h2>
{/* {video ?  <LoginVideo HandleClose={HandleClose}/>
: ""} */}
 
    <SearchedContainer />
    </div>
   <img className="h-screen w-1/2 object-cover opacity-5 border-l-4 b-blur-xl  " src="https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg"/>
   </div>
    </>
}