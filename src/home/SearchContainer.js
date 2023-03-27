import { useState } from "react"
import { SearchedVarietalRegionList } from "./SearchList"
import { WineSearch } from "./WineSearch"

export const SearchedContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    
    return (
        <>
        <div className=" w-full mx-auto flex flex-col lg:flex-row">
        <div className=" p-10 ">
        <h2 className="text-center text-5xl text-secondary lg:text-8xl lg:text-left  lg:p-10">Let's talk wine!</h2>
        <WineSearch setterFunction={setSearchTerms}/> 
        </div>
        <SearchedVarietalRegionList searchTermState={searchTerms} /> 
        </div>
    </>
    )
    
    }