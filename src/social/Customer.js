import { Link } from "react-router-dom"

export const Customer = ({customer}) => {
    return(
    <div className="text-secondary card glass w-64 bg-fourth hover:bg-secondary rounded-sm  mx-auto px-auto px-10">
    <Link className="" to={`/social/details/${customer.id}`}>
            <figure className="p-3 m-3">
            <img className="h-auto w-48 rounded-full"src={customer?.profilePicture}/>
            </figure>
            <div className="card-body ">
            <div className="card-title text-2xl text-white">{customer.fullName}</div>
            </div>
            </Link>
            </div>
            
            )
}