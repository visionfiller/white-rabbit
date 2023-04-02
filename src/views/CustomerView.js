import {  Route, Routes } from "react-router-dom"
import { Library } from "../library/Library"
import { Home } from "../home/Home"
import {  WillILikeItSearchContainer } from "../likeit/LikeItContainer"
import { CardDetails } from "../library/CardDetails"
import { CellarContainer } from "../cellar/CellarContainer"
import { Social } from "../social/Social"
import { CustomerDetails } from "../social/CustomerDetails"
import { UpdateProfile } from "../social/UpdateProfile"
import { ChatWine } from "../chat/Chat"
import { Messages } from "../social/Messages"


export const CustomerViews = () => {
 
    return (<div className="pt-20 md:pt-0">

    <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/home" element={ <Home />} />
        <Route path="/library" element={ <Library/>} />
        <Route path="/chat" element={ <ChatWine/>} />
        <Route path="/library/details/:varietalRegionId" element={ <CardDetails />} />
        <Route path="/social" element={ <Social />} />
        <Route path="/social/updateProfile" element={ <UpdateProfile/>} />
        <Route path="/social/details/:customerId" element={ <CustomerDetails />} />
        <Route path="/social/messages" element={<Messages />} />
        <Route path="/cellar" element={ <CellarContainer />} />
        <Route path="/like" element={ <WillILikeItSearchContainer />} />
       
       

        
    </Routes>
    </div>
    )
}
