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
        <main className="">

            <section className="bg-white ml-auto mr-auto w-3/5 m-14  pt-6 pb-6 border border-dashed border-black">
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

