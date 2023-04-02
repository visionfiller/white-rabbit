import { useState } from "react"
import { SearchedVarietalRegionList } from "./SearchList"
import { WineSearch } from "./WineSearch"

export const SearchedContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    
    return (
        <>
        <div className=" w-full h-3/4 mx-auto flex flex-col lg:flex-row">
        <div className=" p-10 my-auto ">
        <h2 className="text-center text-6xl text-secondary lg:text-8xl lg:text-left  lg:p-10">Let's talk wine!</h2>
        <WineSearch setterFunction={setSearchTerms}/> 
        </div>
        <SearchedVarietalRegionList searchTermState={searchTerms} /> 
        </div>
    </>
    )
    
    }