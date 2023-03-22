import React, { useState } from "react"

import { useNavigate, Link} from "react-router-dom"
import { LoginVideo } from "./LoginVideo";

import { getUserByEmailAndPassword } from "./UserProvider";

export const Login = () => {
    const [email, set] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [video, setVideo] =useState(false)
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
                    setVideo(true)
                    
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }
    const HandleClose =() => {
        setVideo(false)
            navigate("/home")
       
       
    
    }
    return (
        <main className="h-screen w-screen ">
            <div className="border border-white-10 bg-cover blur w-screen h-full bg-[url('https://th.bing.com/th/id/R.8a3385dee3d63c5dd977705abf4cad84?rik=NaXhHe9JUTk9Zw&riu=http%3a%2f%2fwp.production.patheos.com%2fblogs%2funcommongodcommongood%2ffiles%2f2014%2f07%2fiStock_000036147510Small.jpg&ehk=N5mDs7Sa8pDyw5lExQhvswZwotK290GhnV9dVlS9Wh0%3d&risl=&pid=ImgRaw&r=0')]">
                
                </div>
                <div className="absolute bottom-4 left-6  text-white lowercase text-xl opacity-60">take a trip down the rabbit hole</div>
            <div className="text-8xl top-60 text-white absolute right-10 lowercase opacity-80" >White Rabbit.</div>
            <section className="w-screen">
                <form className="absolute bottom-32 right-10 m-auto form-control text-right" onSubmit={handleLogin}>
                    <fieldset className="form-control pt-2">
                        <label className="input-group input-group-md" htmlFor="inputEmail">
                         <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="input input-bordered input-md"
                            placeholder=""
                            
                            required autoFocus />
                         <span className="">email</span>
                        </label>
                            </fieldset>
                  
                    <fieldset className="form-control pt-8">
                        <label className="input-group input-group-md" htmlFor="password">
                        <input type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="input input-bordered input-md"
                            placeholder=""
                            required autoFocus />
                            <span>password</span>
                            </label>
                    </fieldset>
                    <fieldset className="pt-8 flex row">
                        <button className="btn mr-auto ml-auto" type="submit">
                            Sign in
                        </button>
                        <Link className="w-full inline-block pl-8 text-white"to="/register">Not a member yet?</Link>
                    </fieldset>
                </form>
                
            </section>
            {video ?  <LoginVideo HandleClose={HandleClose}/>
: ""}
            
                
            
        </main>
    )
}

