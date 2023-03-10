import { useState } from "react"
import { LikeItSearchBar } from "./LikeItSearch"
import { LikeItSearchedList } from "./LikeItSearchList"
import { Probability } from "./Probability"

export const WillILikeItSearchContainer = () => {
    const [searchTermsVarietal, setSearchTermsVarietal] = useState("")
    const [searchTermsRegion, setSearchTermsRegion] = useState("")

    return(<>
<div className="text-center text-4xl">Will I Like this Wine?</div>

     <div className="flex row p-20">
    <LikeItSearchBar
     setterFunctionVarietal={setSearchTermsVarietal}
     setterFunctionRegion={setSearchTermsRegion} />
     {searchTermsVarietal.length && searchTermsRegion.length ?
    <LikeItSearchedList
     searchTermStateVarietal={searchTermsVarietal}
     searchTermStateRegion={searchTermsRegion} />
     : ""}
     </div>
   
    </>)
}