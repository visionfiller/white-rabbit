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
import { CustomerDetails } from "../social/CustomerDetails"
import { UpdateProfile } from "../social/UpdateProfile"
import { ChatWine } from "../chat/Chat"
import { Messages } from "../social/Messages"
import { MessageForm } from "../social/MessageForm"
import { ReplyForm } from "../social/ReplyForm"


export const CustomerViews = () => {
    
    return (<Routes>
        <Route path="/home" element={ <Home />} />
        <Route path="/library" element={ <Library/>} />
        <Route path="/chat" element={ <ChatWine/>} />
        <Route path="/library/details/:varietalRegionId" element={ <CardDetails />} />
        <Route path="/social" element={ <Social />} />
        <Route path="/social/updateProfile" element={ <UpdateProfile/>} />
        <Route path="/social/details/:customerId" element={ <CustomerDetails />} />
        <Route path="/social/messages" element={<Messages />} />
        {/* <Route path="/social/messageForm/:customerId" element={<MessageForm />} /> */}
        {/* <Route path="/social/reply/:customerId" element={<ReplyForm />} /> */}
        <Route path="/cellar" element={ <CellarContainer />} />
        <Route path="/like" element={ <WillILikeItSearchContainer />} />
       
       

        
    </Routes>
    )
}
