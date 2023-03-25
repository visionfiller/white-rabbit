export const getUsersToCreate = ( user ) => {
    return fetch("https://white-rabbit-api-k3hmh.ondigitalocean.app/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}
export const getUserByEmailId = (user) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/users?email=${user.email}`)
        .then(res => res.json())
}

export const createNewCustomer = ({ customerToSend }) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/customers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customerToSend)
    })
        .then(response => response.json())
}

export const getUserByEmailAndPassword = ( email, password ) => {
    return fetch(`https://white-rabbit-api-k3hmh.ondigitalocean.app/users?email=${email}&password=${password}`)
        .then(res => res.json())
}