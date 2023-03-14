import { useEffect, useState } from "react"
import { getVarietalRegions } from "../library/LibraryProvider"
import { SearchedContainer } from "./SearchContainer"

export const Home = () => {

    return <>
    <div className=" h-screen">
    <h2 className="text-6xl text-center p-20">Let's talk about wine!</h2>
    <SearchedContainer />
    </div>
    </>
}