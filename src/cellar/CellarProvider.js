export const getFavorites = (id) => {
    return fetch(`http://localhost:8088/favorites/?userId=${id}`)
    .then(response => response.json())
}
export const getVarietalRegionsById = (id) => {
    return fetch(`http://localhost:8088/varietalRegions/${id}?_expand=dryness&_expand=body&_expand=acidity&_expand=varietal&_expand=region`)
    .then(response => response.json())
}
