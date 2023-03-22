import { Route, Routes } from "react-router-dom"
import { WineCellar } from "../cellar/WineCellar"
import { ChatWine } from "../chat/Chat"
import { Home } from "../home/Home"
import { SearchedContainer } from "../home/SearchContainer"
import { CardDetails } from "../library/CardDetails"
import { EditVarietalRegion } from "../library/EditVarietalRegion"
import { Library } from "../library/Library"
import { Messages } from "../social/Messages"
import { ReplyForm } from "../social/ReplyForm"
import { RegionForm } from "../somm/RegionForm"
import { Somm } from "../somm/Somm"
import { VarietalForm } from "../somm/VarietalForm"
import { VarietalRegionForm } from "../somm/VarietalRegionForm"
import { WineBottleForm } from "../somm/WineBottleForm"
import { WineList } from "../somm/WineBottleList"

export const EmployeeViews = () => {
    return (
    <Routes>
       <Route path="/home" element={ <Home />} />
       <Route path="/library/details/:varietalRegionId" element={ <CardDetails />} />
        <Route path="/library" element={ <Library/>} />
        <Route path="/chat" element={ <ChatWine/>} />
        <Route path="/library/edit/:varietalRegionId" element={ <EditVarietalRegion />} />
        <Route path="/cellar" element={ <WineCellar />} />
        <Route path="/somm" element={ <Somm />} />
        <Route path="/somm/WineList" element={ <WineList/>} />
        <Route path="/sommMessages" element={ <Messages />} />
        <Route path="/social/reply/:customerId" element={<ReplyForm />} />
        <Route path="/somm/createVarietalRegion" element={ <VarietalRegionForm />} />
        <Route path="/somm/createWineBottle" element={ <WineBottleForm />} />
        <Route path="/somm/createVarietalRegion/createRegion" element={ <RegionForm />} />
        <Route path="/somm/createVarietalRegion/createVarietal" element={<VarietalForm />} />
     
        
       
    </Routes>
    )
}