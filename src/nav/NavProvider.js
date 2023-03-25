export const getUserById = (id) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/users/${id}`)
        .then(res => res.json())
}