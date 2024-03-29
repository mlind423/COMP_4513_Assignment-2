import Modal from "../modalComponents/modal";
import { useState } from "react";

export default function Results(props) {
    let raceData = props.raceData[0];
    const [driver, setDriver] = useState()
    const [constructor, setConstructor] = useState()
    const handleModal = (c) =>{
        // alert("IG add " + c.target.value+ " to the favorites list");
        if(c.target.id == 'driver'){
            setDriver(props.qualifyingData.find((e:any) => e.drivers.driverRef === c.target.value))
        }else if(c.target.id == 'constructor'){
            setConstructor(props.qualifyingData.find((e:any) => e.constructors.constructorRef === c.target.value))
        }
        document.getElementById(`${c.target.id}`).showModal() //This is how the modal opens and it is a daisy function so I have no Idea why it is giving an error
    }
    return(
        
        <div id="SM-standings">
            <Modal data={driver} type="driver"/> {/**I need to generate a dummy modal to prevent errors due to the .showModal Function */}
            <Modal data={constructor} type="constructor"/>
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
                            <button className="btn btn-sm rounded-full bg-inherit border-transparent text-inherit border-0" id='driver' value={c.drivers.driverRef} onClick={handleModal}>{c.drivers.forename + " " + c.drivers.surname}</button>
                            <button className="btn btn-sm rounded-full bg-inherit border-transparent text-inherit border-0" id='constructor' value={c.constructors.constructorRef} onClick={handleModal}>{c.constructors.name}</button>
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
                            <button className="btn btn-sm rounded-full bg-inherit border-transparent text-inherit border-0" id='driver' value={c.drivers.driverRef} onClick={handleModal}>{c.drivers.forename + " " + c.drivers.surname}</button>
                            <button className="btn btn-sm rounded-full bg-inherit border-transparent text-inherit border-0" id='constructor' value={c.constructors.constructorRef} onClick={handleModal}>{c.constructors.name}</button>
                            <div className="SM-Results-Laps">{c.laps}</div>
                            <div className="SM-Results-Pts">{c.points}</div>
                        </li>)
                    })}
                </ul>
            </div>
            {/* {isModalVisible ? (<Modal data={driver} type="driver"/>) : (<></>)} */}
        </div>

    )
}