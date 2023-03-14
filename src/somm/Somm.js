import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getVarietalRegionsById } from "../cellar/CellarProvider"
import { getVarietalRegions } from "../library/LibraryProvider"
import { getCustomers, getWineBottles } from "./SommProvider"

export const Somm = () => {
const [wineBottles, setWineBottles] = useState([])
const [varietalRegions, setVarietalRegions] = useState({})
const [customers, setCustomers] = useState([])

useEffect(
    ()=>{
        getCustomers()
        .then((customerArray) => {
            setCustomers(customerArray)
        })

        getWineBottles()
        .then((data) => {
            setWineBottles(data)
       
        })
        getVarietalRegions()
        .then((data) => {
            setVarietalRegions(data)
        })
    },[]
    )


   

const findVarietal = (bottle) => {
    let foundVarietal = varietalRegions.find(varietalRegion => varietalRegion.id === bottle.varietalRegionId)

    return(
    <div>{foundVarietal.varietal?.name}</div>
    )
}
const findRegion = (bottle) => {
    let foundRegion = varietalRegions.find(varietalRegion => varietalRegion.id === bottle.varietalRegionId)

    return(
    <div>{foundRegion.region?.location}, {foundRegion.region?.country}</div>
    )
}




const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
// const FindWineVarietal = (bottle) => {
//     getVarietalRegionsById(bottle.varietalRegionId)
//     .then((data) => {
// return <div>{data.varietal.name}</div>
//     })
// }



    return <>
    <div className=" w-full text-center">
        <Link className="btn m-3" to="/somm/createVarietalRegion">Assign a new Varietal Region</Link>
        <Link className="btn" to="/somm/createWineBottle">Add new Wine Bottle</Link>

<div className="flex row p-10">

    <div className="w-1/2">
    <h2 className="text-2xl">White Rabbit Customers</h2>
    <div className="overflow-x-auto px-10 ">
    <table className="table w-full border-black border-2 ">
        <tbody>
        <tr className="border-b-2 border-black">
            <td>Customer Name</td>
            <td className="text-center">Favorites Added</td>
        </tr>
        {
        customers.map((customer) => {
        return <tr key={customer.id} className="hover">
            <td>{customer.fullName}</td>
            <td className="text-center">{customer.favorites?.length}</td>
            </tr>})
        }
         </tbody>
     </table>
    </div>
     </div>


        <div className="">
            <h2 className="text-2xl">Wines We Recommend</h2>
            <div className="overflow-x-auto px-10 ">
            <table className="table w-full border-black border-2 p-5 ">
                <tbody>
        <tr className="border-b-2 border-black">
        <td>Wine Name</td>
            <td className="text-center">Vintage</td>
            <td>Varietal</td>
            <td className="text-center">Region</td>
        </tr>
        {wineBottles.map((bottle) => {
            return <tr key={bottle.id}>
                <td><Link href="#" onClick = {() => openInNewTab(bottle?.link)} key={bottle?.id} className="">{bottle.name}</Link></td>
                <td>{bottle.vintage}</td>
                <td>{varietalRegions.length ? findVarietal(bottle)
                : ""}</td>
                <td>{varietalRegions.length ? findRegion(bottle)
                : ""}</td>
                <td></td>
            </tr>
        })} 
        

        
        </tbody>
        
        </table>
            </div>
        </div>
        </div>
        </div>
        </>
}