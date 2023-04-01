import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UploadWidget } from "../cloudinary/UploadWidget"
import { getUsersToCreate, getUserByEmailId} from "./UserProvider"

export const Register = (props) => {
    const [user, setUser] = useState({ isStaff: false})
    const [url, setURL] = useState("")
    const [error, updateError] = useState("")
    let navigate = useNavigate()




    const registerNewUser = () => {
        
        return getUsersToCreate({
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            profilePicture: url,
            isStaff: user.isStaff
        })
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
    function handleOnUpload(error, result, widget) {
        if ( error ) {
          updateError(error);
          widget.close({
            quiet: true
          });
          return;
        }
       
        setURL(result?.info?.secure_url)
        .then(() => {
            const copy = {...user}
            copy.profilePicture = url
            setUser(copy)
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

    return (<>
        <div className="bg-cover blur w-screen h-screen fixed bg-[url('https://th.bing.com/th/id/R.8a3385dee3d63c5dd977705abf4cad84?rik=NaXhHe9JUTk9Zw&riu=http%3a%2f%2fwp.production.patheos.com%2fblogs%2funcommongodcommongood%2ffiles%2f2014%2f07%2fiStock_000036147510Small.jpg&ehk=N5mDs7Sa8pDyw5lExQhvswZwotK290GhnV9dVlS9Wh0%3d&risl=&pid=ImgRaw&r=0')]">
            </div>
        <div className="h-screen w-screen ">
        <div className="pt-48 md:grid grid-cols-3 sm:flex flex-col s">
            <div></div>
            <div className="w-1/2"></div>
            <div className="p-10 w-full">
            <span className="text-4xl text-white lowercase opacity-80 w-full" >register for the white rabbit</span>
            <section className="w-full h-full relative">
            <form className="m-auto form-control text-right " onSubmit={handleRegister}>
                <fieldset className="form-control pt-2">
                    <label className="input-group input-group-md" htmlFor="fullName">
                        <input onChange={updateUser}
                            type="text" id="fullName" className="form-control input input-bordered input-md"
                            placeholder="Enter your name" required autoFocus />
                        <span>name</span>
                    </label>
                </fieldset>
                <fieldset className="pt-4 form-control">
                    <label className="input-group input-group-md" htmlFor="inputEmail">
                        <input onChange={updateUser}
                            type="email" id="email" className="input input-bordered input-md"
                            placeholder="Email address" required />
                        <span className="">email</span>
                    </label>
                </fieldset>
                <fieldset className="pt-4">
                    <label className="input-group input-group-md" htmlFor="password">
                        <input onChange={updateUser}
                            type="password" id="password" className="input input-bordered input-md"
                            placeholder="password" required />
                        <span>password</span>
                    </label>
                </fieldset>
                <fieldset className="pt-4 text-left">
                <UploadWidget onUpload={handleOnUpload}/>
                </fieldset>
                <div className="flex row justify-start gap-10 pt-4 p-5">
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
                        <button className="btn bg-secondary mr-auto ml-auto" type="submit"> Register </button>
                    </fieldset>
                </div>
            </form>
            </section>
        </div>
        </div>
        </div>
        </>
    )
}

