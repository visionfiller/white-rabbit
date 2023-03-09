export const getVarietalRegions = () => {
    return fetch(`http://localhost:8088/varietalRegions?_expand=dryness&_expand=body&_expand=acidity&_expand=varietal&_expand=region`)
    .then(response => response.json())
}

export const getWineTypes = () => {
    return fetch(`http://localhost:8088/wineTypes`)
    .then(response => response.json())
}

export const addToFavorites = (wineObject) => {
    return fetch(` http://localhost:8088/favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wineObject)
    })
        .then(response => response.json())
}

// export const updateVarietalRegion =(varietalRegionObject) => {
//     return fetch(`http://localhost:8088/varietalRegions/${}}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(varietalRegionObject)
//       })
//       .then(response => response.json())
//       .then(getVarietalRegions)
// }