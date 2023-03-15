import { Route, Routes } from "react-router-dom"
import { Library } from "../library/Library"
import { WineCellar } from "../cellar/WineCellar"
import { Home } from "../home/Home"
import { WillILikeIt, WillILikeItSearchContainer } from "../likeit/LikeItContainer"
import { SearchedContainer } from "../home/SearchContainer"
import { CardDetails } from "../library/CardDetails"
import { CellarContainer } from "../cellar/CellarContainer"
import { Probability } from "../likeit/Probability"
import { Social } from "../social/Social"


export const CustomerViews = () => {
    return (<Routes>
        <Route path="/home" element={ <Home />} />
        <Route path="/library" element={ <Library/>} />
        <Route path="/library/details/:varietalRegionId" element={ <CardDetails />} />
        <Route path="/social" element={ <Social />} />
        <Route path="/cellar" element={ <CellarContainer />} />
        <Route path="/like" element={ <WillILikeItSearchContainer />} />
       
       

        
    </Routes>
    )
}
