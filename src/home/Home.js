import { useEffect, useState } from "react"
import { getVarietalRegions } from "../library/LibraryProvider"
import { SearchedContainer } from "./SearchContainer"

export const Home = () => {

    return <>
    <h2 className="text-4xl text-center">Let's talk about wine!</h2>
    <SearchedContainer />
    
    </>
}