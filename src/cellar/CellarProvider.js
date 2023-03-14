export const getFavorites = (id) => {
    return fetch(`http://localhost:8088/favorites/?userId=${id}&_expand=varietalRegion`)
    .then(response => response.json())
}

export const getUsers = () => {
    return fetch(`http://localhost:8088/users`)
    .then(response => response.json())
}
export const getVarietalRegionsById = (id) => {
    return fetch(`http://localhost:8088/varietalRegions/${id}?_expand=dryness&_expand=body&_expand=acidity&_expand=varietal&_expand=region`)
    .then(response => response.json())
}

export const deleteFavorite = (id) => {
    return fetch(`http://localhost:8088/favorites/${id}`, {
        method: "DELETE"
    })
       
}
export const getMatchedWineBottlesbyVarietalRegionId = (id) => {
    return fetch(`http://localhost:8088/wineBottles?varietalRegionId=${id}`) 
    .then(response => response.json())
}


// export const getMatchedWineBottles = (name) => {
//     return fetch(`https://api.spoonacular.com/food/wine/recommendation?wine=${name}&number=3&apiKey=05c00921f46d41cba5aece9c5b74a92f`)
//     .then(response => response.json())
// }