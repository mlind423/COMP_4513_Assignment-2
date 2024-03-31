import { useState } from "react"
import FavButton from "./favouritesButton"
export default function DriverContent(props:any) {
    const calcAge = () => {
        const dob:string = props.data.drivers.dob
        const dobArray:string[] = dob.split('-')
        const date = new Date();
        const currentYear:number = date.getFullYear();
        const currentMonth:number = date.getMonth();
        const currentDay:number = date.getDay();
        const years:number = currentYear - Number(dobArray[0])
        const months:number = currentMonth - Number(dobArray[1])
        const days:number = currentDay - Number(dobArray[2])
        const age:number = ((years * 365) + (months * 31) + days) / 365
        return Math.floor(age)
    }
    if (props.type == "driver") {//This prevents the driver formatting from appearing in a different modal 
        calcAge()
        return (
            <div className="flex flex-col w-full modal-box w-100 px-3 py-3">
                <h1>Driver details</h1>
                <div className="flex w-full">
                    <div className="grid h-auto flex-grow card bg-base-300 rounded-box grid grid-cols-2 gap-4 place-items-center">
                        <div className="gird grid-rows-5 gap-4 px-3 py-3 w-max">
                            <p>Name: {props.data.drivers.forename} {props.data.drivers.surname}</p>
                            <p>Date Of Birth: {props.data.drivers.dob}</p>
                            <p>Nationality: {props.data.drivers.nationality}</p>
                            <p>Age: {calcAge()}</p>
                            <a className="underline text-sky-400 hover:text-sky-200" href={props.data.drivers.url}>Wiki Page</a>
                        </div>
                        <FavButton type={props.type} data={props.data}/>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="grid h-max card bg-base-300 rounded-box place-items-center">
                    <img className="object-contain h-max max-w-xs " src="https://images.pexels.com/photos/17491423/pexels-photo-17491423/free-photo-of-f1-mclaren-mp4-9.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}