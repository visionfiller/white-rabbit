import { Link, useNavigate } from "react-router-dom"
import { CustomerNav } from "./CustomerNav"
import { EmployeeNav } from "./EmployeeNav"




export const NavBar = () => {
    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
	if (rabbitUserObject.staff) {
		return <EmployeeNav/>
	}
	else {
		return <CustomerNav />
	}
}


