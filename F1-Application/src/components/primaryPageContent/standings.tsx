import Modal from "../modalComponents/modal";
import { useState } from "react";
export default function PrimaryPageContent(props) {
    const clickhandler = (c) =>{
        alert("IG add " + c.target.value+ " to the favorites list");
    }
    return(
        <div id="SM-standings">
            <h3>Standings</h3>
            <div id="SM-race-content">
                <ul className="SM-leftList-Main">
                {props.data.drivers.map(c => {
                    return (
                    <li>
                        <div className="SM-Position">{c.position}</div>
                        {/* This generates every modal when the list is generated which could be an issue */}
                        <Modal text={c.drivers.forename + " " + c.drivers.surname} type='driver' surname={c.drivers.surname} forename={c.drivers.forename} refId={c.drivers.driverRef}/>
                        {/* <button className="SM-Name" value={c.drivers.forename + " " + c.drivers.surname} onClick={clickhandler}>{c.drivers.forename + " " + c.drivers.surname}</button> */}
                        <div className="SM-Points">{c.points}</div>
                        <div className="SM-Wins">{c.wins}</div>
                    </li>)
                })}
                </ul>
                <ul className="SM-rightList-Main">
                {props.data.constructors.map(c => {
                    return (
                    <li>
                        <div className="SM-Position">{c.position}</div>
                        <Modal text={c.constructors.name} type='constructor' key={c.constructors.constructorRef} refId={c.constructors.constructorRef}/>
                        {/* <button className="SM-Name" value={c.constructors.name} onClick={clickhandler}>{c.constructors.name}</button> */}
                        <div className="SM-Points">{c.points}</div>
                        <div className="SM-Wins">{c.wins}</div>
                    </li>)
                })}
                </ul>
            </div>
        </div>
    )

}