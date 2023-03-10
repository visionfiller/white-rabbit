import { useState } from "react"
import { SearchedVarietalRegionList } from "./SearchList"
import { WineSearch } from "./WineSearch"

export const SearchedContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    
    return (
        <>
        <div className=" text-center">
        <WineSearch setterFunction={setSearchTerms}/> 
        <SearchedVarietalRegionList searchTermState={searchTerms} /> 
        </div>
    </>
    )
    
    }