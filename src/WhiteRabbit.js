import { Route, Routes } from "react-router-dom"
import { Authorized } from "./auth/Authorized";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./views/ApplicationViews";
import './index.css';
export const WhiteRabbit = () => {

	return (


		<>
		            
			<div className=" h-full w-full bg-cover opacity-5 -z-10 fixed  bg-blur-xl bg-[url('https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg')] " ></div>
			{/* bg-url[(`https://i.pinimg.com/originals/49/c3/06/49c306154adc0a4ae7f45b7a68dd4d69.jpg`)] */}
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
		
				<Route path="*" element={
				<Authorized>
					<>
				
					
                    <NavBar />
                    <ApplicationViews />
					
					
					</>
				</Authorized>

			} />
			
			</Routes>

		</>


	);
}

