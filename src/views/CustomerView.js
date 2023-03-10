import { Route, Routes } from "react-router-dom"
import { Library } from "../library/Library"
import { WineCellar } from "../cellar/WineCellar"
import { Home } from "../home/Home"
import { WillILikeIt } from "../somm/LikeIt"
import { SearchedContainer } from "../home/SearchContainer"
import { CardDetails } from "../library/CardDetails"
import { CellarContainer } from "../cellar/CellarContainer"


export const CustomerViews = () => {
    return (<Routes>
        <Route path="/home" element={ <Home />} />
        <Route path="/library" element={ <Library/>} />
        <Route path="/library/details/:varietalRegionId" element={ <CardDetails />} />

        <Route path="/cellar" element={ <CellarContainer />} />
        <Route path="/like" element={ <WillILikeIt/>} />
       

        
    </Routes>
    )
}
