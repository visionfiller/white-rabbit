import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUsersToCreate, getUserByEmailId, createNewCustomer } from "./UserProvider"

export const Register = (props) => {
    const [user, setUser] = useState({ isStaff: false })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return getUsersToCreate(user)
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
        const copy = { ...user }
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main className="h-screen w-screen ">
            <div className="border border-white-10 bg-cover blur w-screen h-full bg-[url('https://th.bing.com/th/id/R.8a3385dee3d63c5dd977705abf4cad84?rik=NaXhHe9JUTk9Zw&riu=http%3a%2f%2fwp.production.patheos.com%2fblogs%2funcommongodcommongood%2ffiles%2f2014%2f07%2fiStock_000036147510Small.jpg&ehk=N5mDs7Sa8pDyw5lExQhvswZwotK290GhnV9dVlS9Wh0%3d&risl=&pid=ImgRaw&r=0')]">
            </div>
            <form className="absolute bottom-64 right-24  form-control " onSubmit={handleRegister}>
                <h1 className="text-white text-left text-4xl pb-6">Register for White Rabbit</h1>
                <fieldset className="pt-2">
                    <label className="input-group input-group-md" htmlFor="fullName">
                        <input onChange={updateUser}
                            type="text" id="fullName" className="form-control input input-bordered input-md"
                            placeholder="Enter your name" required autoFocus />
                        <span>name</span>
                    </label>
                </fieldset>
                <fieldset className="pt-2 form-control">
                    <label className="input-group input-group-md" htmlFor="inputEmail">
                        <input onChange={updateUser}
                            type="email" id="email" className="input input-bordered input-md"
                            placeholder="Email address" required />
                        <span className="">email</span>
                    </label>
                </fieldset>
                <fieldset className="pt-2">
                    <label className="input-group input-group-md" htmlFor="password">
                        <input onChange={updateUser}
                            type="password" id="password" className="input input-bordered input-md"
                            placeholder="password" required />
                        <span>password</span>
                    </label>
                </fieldset>
                <div className="flex row justify-start gap-10 p-5">
                    <fieldset className="pt-2 ">
                        <label className="flex row gap-4 text-white">
                            <input onChange={(evt) => {
                                const copy = { ...user }
                                copy.isStaff = evt.target.checked
                                setUser(copy)
                            }}
                                type="checkbox" id="isStaff" className="" />
                            <span className="" htmlFor="email"> I work here </span>
                        </label>
                    </fieldset>
                    <fieldset className=" flex row">
                        <button className="btn mr-auto ml-auto" type="submit"> Register </button>
                    </fieldset>
                </div>
            </form>
        </main>
    )
}

