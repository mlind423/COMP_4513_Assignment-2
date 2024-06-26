import Modal from "../modalComponents/modal";
import { useState } from "react";

export default function Results(props:any) {
    const [driver, setDriver] = useState()
    const [constructor, setConstructor] = useState()
    const [circuit, setCircuit]= useState()
    // This first conditional is for the loading animation
    if (!(props.resultsData && props.qualifyingData && props.raceData)){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    // This conditional is to handle issues in our data, as sometimes our database does not contain data for some years. 
    else if(props.resultsData.error || props.qualifyingData.error){
        return <div className="SM- Left"> It seems that we can't find some data for this race's results. Sadly our data is incomplete and doesn't include most older races and races after 2023, sorry about that.</div>;
    }
    else{
        let raceData = props.raceData[0];
        
        const handleModal = (c:any) =>{
            // alert("IG add " + c.target.value+ " to the favorites list");
            if(c.target.id == 'driver'){
                setDriver(props.resultsData.find((e:any) => e.drivers.driverRef === c.target.value))
                props.favCheck(c.target.id, props.resultsData.find((e:any) => e.drivers.driverRef === c.target.value))
            }else if(c.target.id == 'constructor'){
                setConstructor(props.resultsData.find((e:any) => e.constructors.constructorRef === c.target.value))
                props.favCheck(c.target.id, props.resultsData.find((e:any) => e.constructors.constructorRef === c.target.value))
            }else if(c.target.id == 'circuit'){
                setCircuit(raceData)
                props.favCheck(c.target.id, raceData)
            }

            (document.getElementById(`${c.target.id}`) as HTMLFormElement).showModal()
        }
        
        return(
        
            <div className="SM-Left">
                <div>
                    <Modal data={driver} type="driver"  fav={props.fav} favHandle={props.favHandle}/> {/**I need to generate a dummy modal to prevent errors due to the .showModal Function */}
                    <Modal data={constructor} type="constructor"  fav={props.fav} favHandle={props.favHandle}/>
                    <Modal data={circuit} type="circuit"  fav={props.fav} favHandle={props.favHandle}/>
                </div>
                <h3>Results</h3>
                <p id="SM-Race-Print">
                    {`${raceData.name}, 
                    Round ${raceData.round}, 
                    ${raceData.year}, `}
                    <button className="text-secondary-content btn btn-secondary btn-sm rounded-full m-1 border-transparent text-primary-content border-0 hover:btn-primary hover:text-primary-content" id='circuit' value={raceData.name} onClick={handleModal}>{raceData.circuits.name + ","}</button>
                    {" " + raceData.date + ", "}
                    <a href={raceData.url} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Link</a>
                
            
                </p>
                <div id="SM-results-content">
                    <ul className="SM-leftResults">
                        <h4>Qualifying</h4>
                        <li >
                            <div className="SM-Position text-center">#</div>
                            <div className="text-center">Driver</div>
                            <div className="text-center">Constructor</div>
                            <div className="text-center">q1</div>
                            <div className="text-center">q2</div>
                            <div className="text-center">q3</div>
                        </li>
                        {props.qualifyingData.map((c:any,index:any) => {
                            return (
                            <li key={index}>
                                <div className="SM-Position">{c.position}</div>
                                {/* This generates every modal when the list is generated which could be an issue */}
                                {/* <Modal text={c.drivers.forename + " " + c.drivers.surname} type='driver' surname={c.drivers.surname} forename={c.drivers.forename} refId={c.drivers.driverRef}/> */}
                                <button className="btn btn-secondary btn-sm rounded-full m-2 border-transparent text-secondary-content border-0  hover:btn-primary hover:text-primary-content" id='driver' value={c.drivers.driverRef} onClick={handleModal}>{c.drivers.forename + " " + c.drivers.surname}</button>
                                <button className="btn btn-secondary btn-sm rounded-full m-2 border-transparent text-secondary-content border-0  hover:btn-primary hover:text-primary-content" id='constructor' value={c.constructors.constructorRef} onClick={handleModal}>{c.constructors.name}</button>
                                <div >{c.q1}</div>
                                <div >{c.q2}</div>
                                <div >{c.q3}</div>
                            </li>)
                        })}
                    </ul>
                    <div className="divider lg:divider-horizontal"></div>
                    <ul className="SM-rightResults">
                        <h4>Results</h4>
                        <div id="SM-Card-Container">
                            <div className="SM-Results-Card bg-primary text-primary-content rounded">{props.resultsData[0].drivers.forename + " " + props.resultsData[0].drivers.surname}<h5>1st</h5></div>
                            <div className="SM-Results-Card bg-primary text-primary-content rounded">{props.resultsData[1].drivers.forename + " " + props.resultsData[1].drivers.surname}<h5>2nd</h5></div>
                            <div className="SM-Results-Card bg-primary text-primary-content rounded">{props.resultsData[2].drivers.forename + " " + props.resultsData[2].drivers.surname}<h5>3rd</h5></div>
                        </div>
                        <li>
                            <div className="SM-Position text-center">#</div>
                            <div className="text-center">Driver</div>
                            <div className="text-center">Constructor</div>
                            <div className="text-center">Laps</div>
                            <div className="text-center">Pts.</div>
                        </li>
                        {props.resultsData.map((c:any,index:any) => {
                            return (
                            <li key={index}>
                                <div className="SM-Position">{c.position}</div>
                                {/* This generates every modal when the list is generated which could be an issue */}
                                {/* <Modal text={c.drivers.forename + " " + c.drivers.surname} type='driver' surname={c.drivers.surname} forename={c.drivers.forename} refId={c.drivers.driverRef}/> */}
                                <button className="btn btn-secondary btn-sm rounded-full m-2 border-transparent text-secondary-content border-0  hover:btn-primary hover:text-primary-content" id='driver' value={c.drivers.driverRef} onClick={handleModal}>{c.drivers.forename + " " + c.drivers.surname}</button>
                                <button className="btn btn-secondary btn-sm rounded-full m-2 border-transparent text-secondary-content border-0  hover:btn-primary hover:text-primary-content" id='constructor' value={c.constructors.constructorRef} onClick={handleModal}>{c.constructors.name}</button>
                                <div >{c.laps}</div>
                                <div >{c.points}</div>
                            </li>)
                        })}
                    </ul>
                </div>
                {/* {isModalVisible ? (<Modal data={driver} type="driver"/>) : (<></>)} */}
            </div>
        )
    }
}