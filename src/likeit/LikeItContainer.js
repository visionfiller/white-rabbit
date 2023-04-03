import { useEffect, useState } from "react"
import { LikeItSearchBar } from "./LikeItSearch"
import { LikeItSearchedList } from "./LikeItSearchList"

export const WillILikeItSearchContainer = () => {
    const [searchTermsVarietal, setSearchTermsVarietal] = useState("")
    const [searchTermsRegion, setSearchTermsRegion] = useState("")
    const [header, setHeader] = useState(true)

useEffect(
    () => {
        if (searchTermsVarietal !== ""){
            setHeader(false)
        }

    },[searchTermsVarietal]
)




    return (<>
        <div className="flex row">
            {header ?  <div className="hidden md:w-1/2 md:flex md:flex-col">
            <h2 className=" text-center p-24  text-secondary font-semibold text-6xl">Will I Like This Wine?</h2>
            <img className="w-1/3 h-auto absolute bottom-0"src="https://www.nicepng.com/png/full/1012-10122537_funny-cat-clipart-with-a-transparent-background-png.png"/>
            <div className="flex row justify-start absolute left-96 ml-16 mt-24 gap-10">
            <img className="w-24 h-auto  mt-16 -z-10" src="https://th.bing.com/th/id/R.0cb2ebe7c295b4f3d9a58dbadac6a709?rik=6jxWMWyEyP3MmQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fwine%2fwine_PNG9461.png&ehk=jE3KUS8Aeo83rLoFmg6e8uY7KVVl5cZAOPqk76H4fgw%3d&risl=&pid=ImgRaw&r=0"/>
            <img className="w-24 h-auto mt-16 -z-10" src="https://th.bing.com/th/id/R.337f1ecdd2f92d7ac650363e27923100?rik=l342dLzXtL2GyQ&riu=http%3a%2f%2fwww.vinexx.com%2fwp-content%2fuploads%2f2019%2f06%2folivetlane_rrvb_chardonnay_vinexx.png&ehk=JKa%2blOchk%2bYkOha6bjm6YXoMYxVeYE8%2f7hKB%2bG78nE8%3d&risl=&pid=ImgRaw&r=0"/>
            </div>
            </div>
                : ""}
        <div className="flex flex-col md:flex md:flex-row p-16 md:p-36 ">
            <LikeItSearchBar
                setterFunctionVarietal={setSearchTermsVarietal}
                setterFunctionRegion={setSearchTermsRegion} />
            {searchTermsVarietal.length && searchTermsRegion.length ?
                <LikeItSearchedList
                    searchTermStateVarietal={searchTermsVarietal}
                    searchTermStateRegion={searchTermsRegion} />
                : ""}
        </div>
        </div>
    </>)
}