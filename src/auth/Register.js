import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUsersToCreate, getUserByEmailId, createNewCustomer } from "./UserProvider"

export const Register = (props) => {
    const [user, setUser] = useState({
       fullName: "",
       emailAddress: "",
       password: "",
       isStaff: false
       
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return getUsersToCreate({user})
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("rabbit_user", JSON.stringify({
                        id: createdUser.id,
                        staff: createdUser.isStaff
                    }))
                    
                    navigate("/home")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return getUserByEmailId(user)
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Kandy Korner</h1>
                <fieldset>
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updateUser}
                           type="text" id="name" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="password"> Password </label>
                    <input onChange={updateUser}
                        type="password" id="password" className="form-control"
                        placeholder="password" required />
                </fieldset>
                <fieldset>
                    <input onChange={(evt) => {
                        const copy = {...user}
                        copy.isStaff = evt.target.checked
                        setUser(copy)
                    }}
                        type="checkbox" id="isStaff" />
                    <label htmlFor="email"> I am an employee </label>
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

