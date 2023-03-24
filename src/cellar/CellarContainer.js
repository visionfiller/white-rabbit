import { useEffect, useState } from "react"
import { getFavorites, getUsers } from "./CellarProvider"
import { Recommendations } from "./Recommendations"
import { MatchedWineBottles, WineBottles } from "./WineBottles"
import { WineCellar } from "./WineCellar"

export const CellarContainer = () => {
    const [user, setUser] = useState({})
    const [favorites, setFavorites] = useState([])
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)

    useEffect(
        () => {
            getUsers()
                .then((data) => {
                    let foundUser = data.find((user) => user.id === rabbitUserObject.id)
                    setUser(foundUser)
                })
            getFavorites(rabbitUserObject.id)
                .then((data) => {
                    setFavorites(data)
                })
        }, []
    )

    return (<>
        <img className="h-screen w-full object-cover opacity-5 absolute right-0  b-blur-xl -z-10 " src="https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg" />
        <h2 className="text-center p-6 text-secondary font-semibold text-4xl">{user.fullName}'s Favorites</h2>
        <WineCellar rabbitUserObject={rabbitUserObject} />
        <div className="flex flex-row-reverse w-full pt-8">
            <div className="flex row w-full p-8">
                <Recommendations favorites={favorites} />
                <MatchedWineBottles rabbitUserObject={rabbitUserObject} />
            </div>
        </div>
    </>)
}