export const getUsersToCreate = ( user ) => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}
export const getUserByEmailId = (user) => {
    return fetch(`http://localhost:8088/users?email=${user.email}`)
        .then(res => res.json())
}

export const createNewCustomer = ({ customerToSend }) => {
    return fetch(` http://localhost:8088/customers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customerToSend)
    })
        .then(response => response.json())
}

export const getUserByEmailAndPassword = ( email, password ) => {
    return fetch(`http://localhost:8088/users?email=${email}&password=${password}`)
        .then(res => res.json())
}