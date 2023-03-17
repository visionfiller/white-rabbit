import { Link } from "react-router-dom"

export const Customer = ({customer}) => {
    return(
    <div className="text-secondary card w-64 bg-base-100 shadow-secondary shadow-xl">
    <Link className="" to={`/social/details/${customer.id}`}>
            <figure className="p-3 m-3">
            <img className="h-auto w-48"src={customer?.profilePicture}/>
            </figure>
            <div className="card-body ">
            <div className="card-title text-2xl">{customer.fullName}</div>
            </div>
            </Link>
            </div>
            
            )
}