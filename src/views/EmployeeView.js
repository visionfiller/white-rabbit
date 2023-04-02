import { Route, Routes } from "react-router-dom"
import { WineCellar } from "../cellar/WineCellar"
import { ChatWine } from "../chat/Chat"
import { Home } from "../home/Home"

import { CardDetails } from "../library/CardDetails"
import { EditVarietalRegion } from "../library/EditVarietalRegion"
import { Library } from "../library/Library"
import { CustomerDetails } from "../social/CustomerDetails"
import { Messages } from "../social/Messages"
import { ReplyForm } from "../social/ReplyForm"

import { Somm } from "../somm/Somm"

import { VarietalRegionForm } from "../somm/VarietalRegionForm"
import { WineBottleForm } from "../somm/WineBottleForm"
import { WineList } from "../somm/WineBottleList"

export const EmployeeViews = () => {
    return (<div className="pt-20 md:pt-0">
    <Routes>
    <Route path="/" element={ <Home />} />
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
        <Route path="/social/details/:customerId" element={ <CustomerDetails />} />
        {/* <Route path="/somm/createVarietalRegion/createRegion" element={ <RegionForm />} /> */}
        {/* <Route path="/somm/createVarietalRegion/createVarietal" element={<VarietalForm />} /> */}
     
        
       
    </Routes>
    </div>
    )
}