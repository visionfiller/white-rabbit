import { useEffect, useState } from "react"
import { LibraryCard } from "./LibraryCard"
import { getAllFavorites, getRegions, getVarietalRegions, getVarietalRegionsToPaginate, getWineTypes } from "./LibraryProvider"

export const Library = () => {
const [varietalRegions, setVarietalRegions] = useState([])
const [filteredWines, setFilteredWines] = useState([])
const [wineTypeId, setWineTypeId] = useState("")
const [wineTypes, setWineTypes] = useState([])
const [sorted, setSorted] = useState("")
const [loading, setLoading] = useState(false);
const [hasMore, setHasMore] = useState(true);
const [curPage, setCurPage] = useState(1);
const [errorMsg, setErrorMsg] = useState("");
const [showFavorites, setShowFavorites] = useState(false)
const [showMyFavorites, setShowMyFavorites] = useState(false)
const[favorites, setFavorites] = useState([])
const localRabbitUser = localStorage.getItem("rabbit_user")
 const rabbitUserObject = JSON.parse(localRabbitUser)

useEffect(
    () => {
        setLoading(true)
        getVarietalRegionsToPaginate(curPage)
        .then((res) => {
            setHasMore(res.length > 0);
            setVarietalRegions((data) => [...data,...res])
            setErrorMsg("");
        })
        .catch((err) => {
            // set the error msg
            setErrorMsg("Something went wrong, Please try again later");
          })
          .finally(() => {
            setLoading(false);
          });
    },[curPage]
)
useEffect(
    () => {
        getWineTypes()
        .then((data) => {
            setWineTypes(data)
        })
        getAllFavorites()
        .then((data) => {
            setFavorites(data)
        })
    },[]
)
useEffect(
    () => {
        let varietalRegionsFiltered = [...varietalRegions]
        if (wineTypeId){
             varietalRegionsFiltered = varietalRegionsFiltered.filter(varietal => varietal.varietal?.wineTypeId === wineTypeId)
        }
         if (sorted === "body") {
            varietalRegionsFiltered = varietalRegionsFiltered.sort((a,b) => b.bodyId - a.bodyId)
            
        }
        if (sorted === "acidity") {
            varietalRegionsFiltered = varietalRegionsFiltered.sort((a,b) => a.acidityId - b.acidityId)
            
        }
        if (sorted === "dryness") {
            varietalRegionsFiltered = varietalRegionsFiltered.sort((a,b) => a.drynessId - b.drynessId)
            
        }
        if(showFavorites){
            varietalRegionsFiltered = varietalRegionsFiltered.filter(varietal=> favorites.find((favorite) => favorite.varietalRegionId === varietal.id))
        }
        if(showMyFavorites){
            varietalRegionsFiltered = varietalRegionsFiltered.filter(varietal=> favorites.find((favorite) => favorite.varietalRegionId === varietal.id && favorite.userId === rabbitUserObject.id))
        }
//for customers
            setFilteredWines( varietalRegionsFiltered )
     

    },
[varietalRegions, wineTypeId, sorted, showFavorites, showMyFavorites]   
)
const loadMoreOnClick = () => {
    // prevent click if the state is loading
    if (loading) return;
    setCurPage((prev) => prev + 1);
  };

  const CreateList = () => {
    return filteredWines.map(wine => <LibraryCard 
         
        wine={wine}/>)
                  
  }
  const HandleShowFavorites = (event) => {
    event.preventDefault()
    setShowFavorites(event.target.checked)
  }
  const HandleShowMyFavorites = (event) => {
    event.preventDefault()
    setShowMyFavorites(event.target.checked)
  }

    return <>
    <h2 className="text-center p-6 text-secondary font-semibold text-4xl">The Library</h2>
    <div className="grid-cols-2 p-10  font-body">
    <div className="flex row justify-between bg-secondary text-white p-2 rounded">
    <div id="typeFilter" className="">
    <label className="">Filter by type: </label>
    <select className="text-black"
    onChange={
        (evt) => {
            setWineTypeId(parseInt(evt.target.value))
        }}>
            <option className="" value="">All Wines</option>
        {wineTypes.map((type) => {
            return <option key={type.id} value={type.id} id={type.id}>{type.type}</option>
        })}
    </select>
    </div>
    <div id="sortFilters" className="">
    <label>Sort by: </label>
    <select
    className="text-black"
    onChange={
        (evt) => {
            setSorted(evt.target.value)
        }}>
             <option key="none" id="none" value="none">Sort by Ascending</option>
            <option key="body" id="Body" value="body">Body</option>
            <option key="acidity" id="Acidity"value="acidity">Acidity</option>
            <option key="dryness"id="Dryness"value="dryness">Dryness</option>
    
       
    </select>

    </div>
    <div id="favorites" className="flex row gap-2">
        <label>Show everyone's favorites</label>
        <input type="checkbox" checked={showFavorites}  onChange={
            (evt) => {
                HandleShowFavorites(evt)
            }
        } />
        <label>Only show my favorites</label>
        <input type="checkbox" checked={showMyFavorites}  onChange={
            (evt) => {
                HandleShowMyFavorites(evt)
            }
        } />
    </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-4">
        
    {CreateList()}
       
    </div>
    <div className="text-center p-10">
    {errorMsg && <p className="error-msg">{errorMsg}</p>}
        {hasMore && (
          <button className=" loading-more-btn btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" onClick={loadMoreOnClick}>
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
        </div>
    </div>
    </>
}