import { useState } from "react"
import { SearchedVarietalRegionList } from "./SearchList"
import { WineSearch } from "./WineSearch"

export const SearchedContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    
    return (
        <>
        <div className=" w-full mx-auto text-center flex row">
        <div className="flex flex-col p-10">
        <h2 className="text-8xl text-left text-secondary p-20">Let's talk wine!</h2>
        <WineSearch setterFunction={setSearchTerms}/> 
        </div>
        <SearchedVarietalRegionList searchTermState={searchTerms} /> 
        </div>
    </>
    )
    
    }