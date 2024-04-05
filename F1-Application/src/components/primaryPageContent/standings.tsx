import Modal from "../modalComponents/modal";
import { useState } from "react";
export default function PrimaryPageContent(props:any) {
    if (!(props.data.drivers && props.data.constructors)){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    else if (props.data.drivers.error || props.data.constructors.error){
        return <div className="SM-Left"> It seems that we can't find some data for this race's standings. Sadly our data is incomplete and doesn't include most older races and races after 2023, sorry about that.</div>;
    } 
    const [driver, setDriver] = useState()
    const [constructor, setConstructor] = useState()
    const handleModal = (c:any) =>{
        if(c.target.id == 'driver'){
            setDriver(props.data.drivers.find((e:any) => e.drivers.driverRef === c.target.value))
            props.favCheck(c.target.id, props.data.drivers.find((e:any) => e.drivers.driverRef === c.target.value))
        }else if(c.target.id == 'constructor'){
            setConstructor(props.data.constructors.find((e:any) => e.constructors.constructorRef === c.target.value))
            props.favCheck(c.target.id, props.data.constructors.find((e:any) => e.constructors.constructorRef === c.target.value))
        }
        
        (document.getElementById(`${c.target.id}`) as HTMLFormElement).showModal()
    }
    return(
        <div className="SM-Left">
            <div>
                <Modal data={driver} type="driver" fav={props.fav} favHandle={props.favHandle}/>
                <Modal data={constructor} type="constructor" fav={props.fav} favHandle={props.favHandle}/>
            </div>
            <h3>Standings</h3>
            <div id="SM-race-content">
                
                
                <ul className="SM-leftStanding">
                <h4>Drivers</h4>
                <li>
                    <div className="SM-Position">#</div>
                    <div className="SM-Name">Name</div>
                    <div className="SM-Points">Pts.</div>
                    <div className="SM-Wins">Wins</div>
                </li>
                {props.data.drivers.map((c:any, index:number) => {
                    return (
                    <li key={index}>
                        <div className="SM-Position">{c.position}</div>
                        {/* This generates every modal when the list is generated which could be an issue */}
                        {/* <Modal text={c.drivers.forename + " " + c.drivers.surname} type='driver' surname={c.drivers.surname} forename={c.drivers.forename} refId={c.drivers.driverRef}/> */}
                        <button id="driver" className="text-secondary-content btn btn-secondary btn-sm rounded-full m-2 border-transparent text-secondary-content border-0" value={c.drivers.driverRef} onClick={handleModal}>{c.drivers.forename + " " + c.drivers.surname}</button>
                        <div className="SM-Points">{c.points}</div>
                        <div className="SM-Wins">{c.wins}</div>
                    </li>)
                })}
                </ul>
                <ul className="SM-rightStanding">
                <h4>Constructors</h4>
                <li>
                    <div className="SM-Position">#</div>
                    {/* <Modal text={c.constructors.name} type='constructor' key={c.constructors.constructorRef} refId={c.constructors.constructorRef} test="test"/> */}
                    <div className="SM-Name" >Name</div>
                    <div className="SM-Points">Pts.</div>
                    <div className="SM-Wins">Wins</div>
                </li>
                {props.data.constructors.map((c:any, index:number) => {
                    return (
                    <li key={index}>
                        <div className="SM-Position">{c.position}</div>
                        {/* <Modal text={c.constructors.name} type='constructor' key={c.constructors.constructorRef} refId={c.constructors.constructorRef} test="test"/> */}
                        <button id="constructor" className="text-secondary-content btn btn-secondary btn-sm rounded-full m-2 border-transparent text-secondary-content border-0" value={c.constructors.constructorRef} onClick={handleModal}>{c.constructors.name}</button>
                        <div className="SM-Points">{c.points}</div>
                        <div className="SM-Wins">{c.wins}</div>
                    </li>)
                })}
                </ul>
            </div>
        </div>
    )

}