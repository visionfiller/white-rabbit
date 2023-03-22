import { useState } from "react"
import { LikeItSearchBar } from "./LikeItSearch"
import { LikeItSearchedList } from "./LikeItSearchList"
import { Probability } from "./Probability"

export const WillILikeItSearchContainer = () => {
    const [searchTermsVarietal, setSearchTermsVarietal] = useState("")
    const [searchTermsRegion, setSearchTermsRegion] = useState("")

    return(<>
    <img className="h-screen w-full object-cover opacity-5 absolute right-0  b-blur-xl -z-10 " src="https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg"/>
<div className="text-center p-6 text-secondary font-semibold text-4xl">Will I Like this Wine?</div>

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