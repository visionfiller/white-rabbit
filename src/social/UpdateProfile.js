import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCustomerById, updateCustomer } from "./SocialProvider"

export const UpdateProfile = () => {
    const[user, updateUser] = useState({})
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(
        () => {
            if(rabbitUserObject){

            
            getCustomerById(rabbitUserObject.id)
            .then((data) => {
                updateUser(data)
            })
            setIsLoading(false)
        }
        else{setIsLoading(false)}
        },[]
    )
    
const HandleControlledInputChange = (event) => {
    const newUser = {...user}
    newUser[event.target.name] = event.target.value
    updateUser(newUser)
}
const HandleSaveButton = () => {
    setIsLoading(true)
    if(rabbitUserObject) {
        updateCustomer({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            profilePicture: user.profilePicture,
            isStaff: false
    
        })
        .then(()=> navigate(`/social`))
    }
    
    
    }
    
    
    
return(<>
<div className="text-center border-4 border-dashed ml-10 mr-10 m-20 w-auto">
        <h2>Update your profile</h2>
<form className="p-6">
<fieldset className="pt-2">
                <label className="input-group input-group-md" htmlFor="fullName">
                    <input onChange={HandleControlledInputChange}
                           type="text" id="fullName" className="form-control input input-bordered input-md"
                           defaultValue={user.fullName} name="fullName" required autoFocus />
                           <span>name</span>
                           </label>
                </fieldset>
                <fieldset className="pt-2 form-control">
                <label className="input-group input-group-md" htmlFor="inputEmail">
                    <input onChange={HandleControlledInputChange}
                        type="email" id="email" className="input input-bordered input-md"
                        defaultValue={user.email} name="email" required />
                        <span className="">email</span>
                        </label>
                </fieldset>
                <fieldset className="pt-2">
                <label className="input-group input-group-md" htmlFor="password">
                    <input onChange={HandleControlledInputChange}
                        defaultValue={user.password}
                        type="text" id="password" className="input input-bordered input-md"
                        placeholder="new password" name="password"required />
                        <span>password</span>
                        </label>
                </fieldset>

                <fieldset className="pt-2">
                <label className="input-group input-group-md" htmlFor="picture">
                    <input onChange={HandleControlledInputChange}
                      
                        type="text" id="profilePicture" className="input input-bordered input-md"
                        placeholder="URL" name="profilePicture"required />
                        <span>profile picture</span>
                        </label>
                </fieldset>
                <button className="btn m-4" disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            HandleSaveButton()
          }}>
               Submit Changes to Profile
            </button>

</form>
</div>
</>)
}