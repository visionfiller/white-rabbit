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

