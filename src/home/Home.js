
import { SearchedContainer } from "./SearchContainer"


export const Home = () => {

    return <>
        <div className="flex row h-screen w-screen">
            <SearchedContainer />
            <img className="h-screen w-full object-cover opacity-5 absolute right-0  b-blur-xl -z-10 " src="https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg" />
        </div>
    </>
}