import { Link } from "react-router-dom"

export const Wine =({wine}) => {
    return(<>
    <Link className="card w-64 h-64 bg-slate-100 shadow-xl m-2" to={`/library/details/${wine.id}`}>
 <div className="card-body p-1 mb-4 h-full ">
    <h2 className="card-title">{wine?.region?.location} {wine.varietal?.name}</h2>
    <div>Country: {wine?.region?.country}</div>
    <img className="h-36 w-full mx-auto object-cover" src={wine?.varietal?.image}/>
    
       </div>
        </Link>
    </>)
}


/*
<div className="card w-64 h-64 bg-slate-100 shadow-xl m-4 ">
        
    <div className="absolute">
            {rabbitUserObject.staff ?  <button className="btn btn-sm bg-secondary" onClick={()=> navigate(`/library/edit/${wine.id}`) }>Edit Details</button>
            : ""
             } 
             {!rabbitUserObject.staff && favorites.every(favorite => favorite.varietalRegionId !== wine.id)? <button className="btn btn-sm bg-secondary " onClick={()=> addToFavorites(wineObject).then(()=>navigate("/cellar")) }> Add to Favorites
            </button> 
            :""

             }
            

        </div> 
        <div className="absolute right-0">
            { isLoading? ""
            : StarButton(wine)}
        </div>
        <div className="card-body p-1 mb-4 h-full ">
        <Link className="" to={`/library/details/${wine.id}`}>
            <img className="h-36 w-full mx-auto object-cover" src={wine?.varietal?.image}/>
            </Link>
            <div className="card-title m-2 flex flex-col w-full ">
                <div>{wine?.region?.location} {wine.varietal?.name}</div>
                <div className="text-sm ">Country: {wine?.region?.country}</div>
                
            </div>
            
           
     </div>
             
</div>*/