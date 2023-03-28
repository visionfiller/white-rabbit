import { Link } from "react-router-dom"

export const Customer = ({customer}) => {
    return(
   
        <Link className="text-secondary card h-72 w-96 rounded-lg  m-2 " to={`/social/details/${customer.id}`}>
        <div className="card-body w-96 ">
        <div className="card-title text-4xl text-white w-96 bg-primary absolute top-64 left-0"> <span className="mx-auto">{customer.fullName}</span></div>
        </div>
        <img className="h-full w-96 object-cover border-2 border-primary rounded-lg"src={customer?.profilePicture}/>
        </Link>
            )
}

