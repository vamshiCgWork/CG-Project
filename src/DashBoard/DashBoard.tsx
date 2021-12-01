import React from 'react'
import NavBar from './NavBar'
import Cards from './Cards'
import SearchDropDown from './SearchDropDown'
import NewVehicle from './NewVehicle'
export default function DashBoard() {
    return (
        <div>
            <NavBar />
            <SearchDropDown />
            <Cards />
            <NewVehicle />
        </div>
    )
}
