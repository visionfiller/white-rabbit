export const getVarietalRegions = () => {
    return fetch(`http://localhost:8088/varietalRegions?_expand=dryness&_expand=body&_expand=acidity&_expand=varietal&_expand=region`)
    .then(response => response.json())
}
export const getAllFavorites = () => {
    return fetch(`http://localhost:8088/favorites`)
    .then(response => response.json())
}
export const getVarietalRegionsToPaginate = (currentPage) => {
    return fetch(`http://localhost:8088/varietalRegions?_page=${currentPage}&_limit=10_expand=dryness&_expand=body&_expand=acidity&_expand=varietal&_expand=region`)
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

export const updateVarietalRegion =(varietalRegionObject) => {
    return fetch(`http://localhost:8088/varietalRegions/${varietalRegionObject.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(varietalRegionObject)
      })
      .then(response => response.json())
}

export const Geocoding = (city) => {
    return fetch (`https://graphhopper.com/api/1/geocode?q=${city}&limit=1&key=f8c2147e-b7dc-4d37-9d6e-a0a259f410a8`)
    .then(response => response.json())
}
