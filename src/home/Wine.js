import { Link } from "react-router-dom"

export const Wine =({wine}) => {
    return(<>
    <Link to={`/library/details/${wine.id}`}>
    <div className="card">
    <div>{wine?.region?.location} {wine.varietal?.name}</div>
    <div>Country: {wine?.region?.country}</div>
    <img src={wine?.varietal?.image}/>
    <div>Body: {wine?.body?.density}</div>
    <div>Acidity: {wine?.acidity?.style}</div>
    <div>Dryness: {wine?.dryness?.level}</div>
        </div>
        </Link>
    </>)
}