import React, { useState } from "react"

import { useNavigate, Link} from "react-router-dom"

import { getUserByEmailAndPassword } from "./UserProvider";

export const Login = () => {
    const [email, set] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return getUserByEmailAndPassword(email,password)
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("rabbit_user", JSON.stringify({
                        id: user.id,
                        staff: user.isStaff
                    }))

                    navigate("/home")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="flex row h-screen">
            <div className="hidden bg-cover lg:block lg: w-3/5 h-screen bg-[url('https://th.bing.com/th/id/R.8a3385dee3d63c5dd977705abf4cad84?rik=NaXhHe9JUTk9Zw&riu=http%3a%2f%2fwp.production.patheos.com%2fblogs%2funcommongodcommongood%2ffiles%2f2014%2f07%2fiStock_000036147510Small.jpg&ehk=N5mDs7Sa8pDyw5lExQhvswZwotK290GhnV9dVlS9Wh0%3d&risl=&pid=ImgRaw&r=0')]">
                <h2 className="mx-auto  text-white text-6xl flex flex-col"><span>White</span><span>Rabbit</span></h2>
            </div>

            <section className="bg-white w-2/5 m-14  pt-6 pb-6 border border-dashed border-black">
                <form className="w-2/5 ml-auto mr-auto form-control" onSubmit={handleLogin}>
                    <h2 className="text-left">Please sign in</h2>
                    <fieldset className="form-control pt-2">
                        <label className="input-group input-group-md" htmlFor="inputEmail">
                         <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="input input-bordered input-md"
                            placeholder="Email address"
                            required autoFocus />
                         <span className="">email</span>
                        </label>
                            </fieldset>
                  
                    <fieldset className="form-control pt-2">
                        <label className="input-group input-group-md" htmlFor="password">
                        <input type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="input input-bordered input-md"
                            placeholder="password"
                            required autoFocus />
                            <span>password</span>
                            </label>
                    </fieldset>
                    <fieldset className="pt-8 flex row">
                        <button className="btn mr-auto ml-auto" type="submit">
                            Sign in
                        </button>
                        <Link className="w-full inline-block pl-8"to="/register">Not a member yet?</Link>
                    </fieldset>
                </form>
                
            </section>

            
                
            
        </main>
    )
}

