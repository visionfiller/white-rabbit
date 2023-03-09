
import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../home/Home"
import { CustomerViews } from "./CustomerView"
import { EmployeeViews } from "./EmployeeView"



export const ApplicationViews = () => {

    const localRabbitUser = localStorage.getItem("rabbit_user")
    const rabbitUserObject = JSON.parse(localRabbitUser)
	if (rabbitUserObject.staff) {
		return <EmployeeViews />
	}
	else {
		return <CustomerViews />
	}
}