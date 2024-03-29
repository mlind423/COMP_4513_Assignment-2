import Modal from "../modalComponents/modal";
import { useState } from "react";

export default function PrimaryPageContent(props) {

    return(
        <div id="SM-standings">
            <h3>Standings</h3>
            <div id="SM-race-content">
                
                <ul className="SM-leftStanding">
                <h4>Drivers</h4>
                {props.data.drivers.map(c => {
                    return (
                    <li>
                        <div className="SM-Position">{c.position}</div>
                        {/* This generates every modal when the list is generated which could be an issue */}
                        {/* <Modal text={c.drivers.forename + " " + c.drivers.surname} type='driver' surname={c.drivers.surname} forename={c.drivers.forename} refId={c.drivers.driverRef}/> */}
                        <button className="btn btn-sm rounded-full bg-inherit border-transparent text-inherit border-0" value={c.drivers.driverRef} onClick={clickhandler}>{c.drivers.forename + " " + c.drivers.surname}</button>
                        <div className="SM-Points">{c.points}</div>
                        <div className="SM-Wins">{c.wins}</div>
                    </li>)
                })}
                </ul>
                <ul className="SM-rightStanding">
                <h4></h4>
                {props.data.constructors.map(c => {
                    return (
                    <li>
                        <div className="SM-Position">{c.position}</div>
                        {/* <Modal text={c.constructors.name} type='constructor' key={c.constructors.constructorRef} refId={c.constructors.constructorRef} test="test"/> */}
                        <button className="btn btn-sm rounded-full bg-inherit border-transparent text-inherit border-0" value={c.constructors.name} onClick={clickhandler}>{c.constructors.name}</button>
                        <div className="SM-Points">{c.points}</div>
                        <div className="SM-Wins">{c.wins}</div>
                    </li>)
                })}
                </ul>
            </div>
        </div>
    )

}