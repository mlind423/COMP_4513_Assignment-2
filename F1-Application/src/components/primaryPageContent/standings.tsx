import Modal from "../modalComponents/modal";
import { useState } from "react";

export default function PrimaryPageContent(props:any) {
    const [driver, setDriver] = useState()
    const [constructor, setConstructor] = useState()
    const handleModal = (c:any) =>{
        if(c.target.id == 'driver'){
            setDriver(props.data.drivers.find((e:any) => e.drivers.driverRef === c.target.value))
        }else if(c.target.id == 'constructor'){
            setConstructor(props.data.constructors.find((e:any) => e.constructors.constructorRef === c.target.value))
        }
        (document.getElementById(`${c.target.id}`) as HTMLFormElement).showModal()
    }
    return(
        <div id="SM-standings">
            <Modal data={driver} type="driver"/>
            <Modal data={constructor} type="constructor"/>
            <h3>Standings</h3>
            <div id="SM-race-content">
                
                <ul className="SM-leftStanding">
                <h4>Drivers</h4>
                {props.data.drivers.map((c:any) => {
                    return (
                    <li>
                        <div className="SM-Position">{c.position}</div>
                        {/* This generates every modal when the list is generated which could be an issue */}
                        {/* <Modal text={c.drivers.forename + " " + c.drivers.surname} type='driver' surname={c.drivers.surname} forename={c.drivers.forename} refId={c.drivers.driverRef}/> */}
                        <button id="driver" className="btn btn-sm rounded-full bg-inherit border-transparent text-inherit border-0" value={c.drivers.driverRef} onClick={handleModal}>{c.drivers.forename + " " + c.drivers.surname}</button>
                        <div className="SM-Points">{c.points}</div>
                        <div className="SM-Wins">{c.wins}</div>
                    </li>)
                })}
                </ul>
                <ul className="SM-rightStanding">
                <h4></h4>
                {props.data.constructors.map((c:any) => {
                    return (
                    <li>
                        <div className="SM-Position">{c.position}</div>
                        {/* <Modal text={c.constructors.name} type='constructor' key={c.constructors.constructorRef} refId={c.constructors.constructorRef} test="test"/> */}
                        <button id="constructor" className="btn btn-sm rounded-full bg-inherit border-transparent text-inherit border-0" value={c.constructors.constructorRef} onClick={handleModal}>{c.constructors.name}</button>
                        <div className="SM-Points">{c.points}</div>
                        <div className="SM-Wins">{c.wins}</div>
                    </li>)
                })}
                </ul>
            </div>
        </div>
    )

}