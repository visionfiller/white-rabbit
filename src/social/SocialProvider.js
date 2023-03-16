export const getCustomerById = (id) => {
 return fetch(`http://localhost:8088/users/${id}?isStaff=false&_embed=favorites`)
        .then(response => response.json())
    }
    export const updateCustomer =(userObject) => {
        return fetch(`http://localhost:8088/users/${userObject.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
          })
          .then(response => response.json())
    }
    export const getMessagesById = (id) => {
        return fetch(`http://localhost:8088/messages?receiverUserId=${id}`)
               .then(response => response.json())
           }
    export const CreateNewMessage =(messageObject) => {
        return fetch(` http://localhost:8088/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObject)
        })
            .then(response => response.json())
    }
    export const deleteMessage = (id) => {
        return fetch(`http://localhost:8088/messages/${id}`, {
            method: "DELETE"
        })
          
    }
