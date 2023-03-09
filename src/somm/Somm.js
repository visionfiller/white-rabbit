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
        <Link className="btn" to="/somm/createVarietalRegion">Create a new Varietal Region</Link>
    <table className="text-center">
        <tr>
            <td>Customer Name</td>
            <td>Favorites Added</td>
        </tr>
        {
        customers.map((customer) => {
        return <tr>
            <td>{customer.fullName}</td>
            <td className="text-center">{customer.favorites?.length}</td>
            </tr>})
}

        </table>
        </div>
        </>
}