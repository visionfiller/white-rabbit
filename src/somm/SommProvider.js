export const getCustomers = () => {
    return fetch(`http://localhost:8088/users?isStaff=false&_embed=favorites`)
    .then(response => response.json())
}
export const getRegions = () => {
    return fetch(`http://localhost:8088/regions?_sort=location&_order=asc`)
    .then(response => response.json())
}
export const getRegionsById = (id) => {
    return fetch(`http://localhost:8088/regions/${id}`)
    .then(response => response.json())
}
export const getVarietals = () => {
    return fetch(`http://localhost:8088/varietals?_sort=name&_order=asc`)
    .then(response => response.json())
}
export const getVarietalById = (id) => {
    return fetch(`http://localhost:8088/varietals/${id}`)
    .then(response => response.json())
}
export const getBodies = () => {
    return fetch(`http://localhost:8088/bodies`)
    .then(response => response.json())
}
export const getBodiesById = (id) => {
    return fetch(`http://localhost:8088/bodies/${id}`)
    .then(response => response.json())
}
export const getAcidities = () => {
    return fetch(`http://localhost:8088/acidities`)
    .then(response => response.json())
}
export const getAcidityById = (id) => {
    return fetch(`http://localhost:8088/acidities/${id}`)
    .then(response => response.json())
}
export const getDrynesses = () => {
    return fetch(`http://localhost:8088/drynesses`)
    .then(response => response.json())
}
export const getDrynessById = (id) => {
    return fetch(`http://localhost:8088/drynesses`)
    .then(response => response.json())
}

export const createNewVarietalRegion = (wineObject) => {
    return fetch(` http://localhost:8088/varietalRegions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(wineObject)
    })
        .then(response => response.json())
}
export const createRegion = (regionObject) => {
    return fetch(` http://localhost:8088/regions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(regionObject)
    })
        .then(response => response.json())
}
export const createVarietal = (varietalObject) => {
    return fetch(` http://localhost:8088/varietals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(varietalObject)
    })
        .then(response => response.json())
}

export const createWineBottle = (bottleObject) => {
    return fetch(` http://localhost:8088/wineBottles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bottleObject)
    })
        .then(response => response.json())
}