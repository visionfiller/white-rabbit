import { Link } from "react-router-dom"

export const Wine =({wine}) => {
    return(<>
    <Link className="card w-64 h-64 bg-slate-100 shadow-xl m-2" to={`/library/details/${wine.id}`}>
 <div className="card-body">
    <h2 className="card-title">{wine?.region?.location} {wine.varietal?.name}</h2>
    <div>Country: {wine?.region?.country}</div>
    <img className="h-3/5 object-cover" src={wine?.varietal?.image}/>
    
       </div>
        </Link>
    </>)
}