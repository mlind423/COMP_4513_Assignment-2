import { useState } from "react"
export default function DriverContent(props) {
    if (props.type == "driver") {
        return (
            <div className="flex flex-col w-full modal-box w-100">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                    <h1>Driver details</h1>
                    <p>{props.forename} {props.surname}</p>
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