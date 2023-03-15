import { useEffect, useState } from "react"
import { getVarietalRegions } from "../library/LibraryProvider"
import { SearchedContainer } from "./SearchContainer"

export const Home = () => {

    return <>
    <div className="flex row h-screen">
    <div className=" h-screen w-3/4 ">
    <h2 className="text-8xl text-left text-secondary p-20">Let's talk about wine!</h2>
    <SearchedContainer />
    </div>
   <img className="h-screen w-1/2 object-cover opacity-5 blur-sm  " src="https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg"/>
   </div>
    </>
}