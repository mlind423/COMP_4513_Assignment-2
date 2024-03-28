import Modal from "../modalComponents/modal";
import { useState } from "react";

export default function Results(props) {
    let IsModalVisible:boolean = false;
    const [driver, setDriver] = useState();
    let raceData = props.raceData[0];
    const clickhandler = (c) =>{
        // alert("IG add " + c.target.value+ " to the favorites list");
        setDriver(c.target.value)
        if(IsModalVisible == false){
            IsModalVisible = true
            document.getElementById(`${driver}`).showModal()
        }else{
            IsModalVisible = false 
        }
    }

    return(
        <div id="SM-standings">
            <h3>Results</h3>
            <p>{`${raceData.name}, 
            Round ${raceData.round}, 
            ${raceData.year}, `}
            <button>{raceData.circuits.name}</button>
            {raceData.date + ", "}
            <a href={raceData.url}>Link</a>
            
        
            </p>
            <div id="SM-race-content">
                <ul className="SM-leftResults">
                    <h4>Qualifying</h4>
                    {props.qualifyingData.map((c,index) => {
                        return (
                        <li key={index}>
                            <div className="SM-Position">{c.position}</div>
                            {/* This generates every modal when the list is generated which could be an issue */}
                            {/* <Modal text={c.drivers.forename + " " + c.drivers.surname} type='driver' surname={c.drivers.surname} forename={c.drivers.forename} refId={c.drivers.driverRef}/> */}
                            <button className="SM-Name" value={c.drivers.forename + " " + c.drivers.surname} onClick={clickhandler}>{c.drivers.forename + " " + c.drivers.surname}</button>
                            <button className="SM-Name" value={c.constructors.name} onClick={clickhandler}>{c.constructors.name}</button>
                            <div className="SM-q">{c.q1}</div>
                            <div className="SM-q">{c.q2}</div>
                            <div className="SM-q">{c.q3}</div>
                        </li>)
                    })}
                </ul>
                <ul className="SM-rightResults">
                    <h4>Results</h4>
                    <div id="SM-Card-Container">
                        <div className="SM-Results-Card">{props.resultsData[0].drivers.forename + " " + props.resultsData[0].drivers.surname}<h5>1st</h5></div>
                        <div className="SM-Results-Card">{props.resultsData[1].drivers.forename + " " + props.resultsData[1].drivers.surname}<h5>2nd</h5></div>
                        <div className="SM-Results-Card">{props.resultsData[2].drivers.forename + " " + props.resultsData[2].drivers.surname}<h5>3rd</h5></div>
                    </div>
                    {props.resultsData.map((c,index) => {
                        return (
                        <li key={index}>
                            <div className="SM-Position">{c.position}</div>
                            {/* This generates every modal when the list is generated which could be an issue */}
                            {/* <Modal text={c.drivers.forename + " " + c.drivers.surname} type='driver' surname={c.drivers.surname} forename={c.drivers.forename} refId={c.drivers.driverRef}/> */}
                            <button className="SM-Name" value={c.drivers.forename + " " + c.drivers.surname} onClick={clickhandler}>{c.drivers.forename + " " + c.drivers.surname}</button>
                            <button className="SM-Name" value={c.constructors.name} onClick={clickhandler}>{c.constructors.name}</button>
                            <div className="SM-Results-Laps">{c.laps}</div>
                            <div className="SM-Results-Pts">{c.points}</div>
                        </li>)
                    })}
                </ul>
            </div>
            {IsModalVisible ? (null) : (<Modal text={driver + " " + driver} type='driver' surname={driver} forename={driver} refId={driver} />)}
        </div>

    )
}