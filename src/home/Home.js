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
    <div className="flex row h-screen w-screen">
   
  

    
    <SearchedContainer />
    
    
    <img className="h-screen w-full object-cover opacity-5 absolute right-0  b-blur-xl -z-10 " src="https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg"/>
   </div>
    </>
}