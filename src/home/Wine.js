import { Link } from "react-router-dom"

export const Wine =({wine}) => {
    return(<>
    <Link className="card glass" to={`/library/details/${wine.id}`}>
 <div className="card-body">
    <h2 className="card-title">{wine?.region?.location} {wine.varietal?.name}</h2>
    <div>Country: {wine?.region?.country}</div>
    <img src={wine?.varietal?.image}/>
    <div>Body: {wine?.body?.density}</div>
    <div>Acidity: {wine?.acidity?.style}</div>
    <div>Dryness: {wine?.dryness?.level}</div>
       </div>
        </Link>
    </>)
}