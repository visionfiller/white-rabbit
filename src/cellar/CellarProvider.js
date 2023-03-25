export const getFavorites = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/favorites/?userId=${id}&_expand=varietalRegion`)
    .then(response => response.json())
}

export const getUsers = () => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/users`)
    .then(response => response.json())
}
export const getVarietalRegionsById = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/varietalRegions/${id}?_expand=dryness&_expand=body&_expand=acidity&_expand=varietal&_expand=region`)
    .then(response => response.json())
}

export const deleteFavorite = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/favorites/${id}`, {
        method: "DELETE"
    })
       
}
export const getMatchedWineBottlesbyVarietalRegionId = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/wineBottles?varietalRegionId=${id}`) 
    .then(response => response.json())
}


