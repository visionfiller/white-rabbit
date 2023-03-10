import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCustomers } from "./SommProvider"

export const Somm = () => {
const [customers, setCustomers] = useState([])
useEffect(
    ()=>{
        getCustomers()
        .then((customerArray) => {
            setCustomers(customerArray)
        })


    },[]
    )







    return <>
    <div className=" w-full text-center">
        <Link className="btn m-3" to="/somm/createVarietalRegion">Assign a new Varietal Region</Link>
        <Link className="btn" to="/somm/createWineBottle">Add new Wine Bottle</Link>
    <div className="overflow-x-auto p-10 ">
    <table className="table w-full ">
        <tr className="hover">
            <td>Customer Name</td>
            <td className="text-center">Favorites Added</td>
        </tr>
        {
        customers.map((customer) => {
        return <tr className="hover">
            <td>{customer.fullName}</td>
            <td className="text-center">{customer.favorites?.length}</td>
            </tr>})
}

        </table>
        </div>
        </div>
        </>
}