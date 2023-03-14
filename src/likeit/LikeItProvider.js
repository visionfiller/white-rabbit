export const createFoundWineSearch= (foundObject) => {
    return fetch(` http://localhost:8088/foundWineSearches`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(foundObject)
    })
        .then(response => response.json())
}

export const getFoundWineSearches = () => {
    return fetch(`http://localhost:8088/foundWineSearches`)
    .then(response => response.json())
}

export const deleteFoundWineSearch = (id) => {
    return fetch(`http://localhost:8088/foundWineSearches/${id}`, {
        method: "DELETE"
    })
        .then(getFoundWineSearches)
}