import Standings from "./standings";
import Results from "./results"
import { useState, useEffect } from "react";
export default function RightContainer(props:any) {
    const [drivers, setDrivers] = useState(Array<string>) 
    const [constructors, setConstructors] = useState(Array<string>)
    const [circuits, setCircuits] = useState(Array<string>)
    const [fav, setFav] = useState('♡')
    

    function handler(type:string, data:any){
        if(fav == "♡"){
            addToFavourites(type, data)
        }else if(fav == "♥"){
            removeFromFavourites(type, data)
        }
    }

    const addToFavourites = (type:string, data:any) =>{
        if(type === 'driver'){
            const value:string = data.drivers.forename + ' ' + data.drivers.surname
            setDrivers(JSON.parse(localStorage.getItem('drivers') || '[]'))
            const temp:string[] = [...drivers, value]
            setDrivers(temp)
            setFav("♥")
        }else if(type === 'constructor'){
            setConstructors(JSON.parse(localStorage.getItem('constructors') || '[]'))
            const temp:string[] = [...constructors, data.constructors.name]
            setConstructors(temp)
            setFav("♥")
        }else if(type === 'circuit'){
            setCircuits(JSON.parse(localStorage.getItem('circuits') || '[]'))
            const temp:string[] = [...circuits, data.circuits.name]
            setCircuits(temp)
            setFav("♥")
        }
    }
    
    const removeFromFavourites = (type:string, data:any) => {
        if(type === 'driver'){
            if(drivers.length != 1){
                const value:string = data.drivers.forename + ' ' + data.drivers.surname
                const indx = drivers.indexOf(value)
                const temp:string[] = drivers.splice(indx + 1, 1)
                setDrivers(temp)
            }else{
                const empt:Array<string> = []
                setDrivers(empt)
            }
            setFav("♡")
        }else if(type === 'constructor'){
            if(constructors.length != 1){
                const value = data.constructors.name
                const indx = constructors.indexOf(value)
                const temp:string[] = constructors.splice(indx + 1, 1)
                setConstructors(temp)
            }else{
                const empt:Array<string> = []
                setConstructors(empt)
            }
            setFav("♡")
        }else if(type === 'circuit'){
            if(circuits.length != 1){
                const value = data.circuits.name
                const indx = circuits.indexOf(value)
                const temp:string[] = circuits.splice(indx + 1, 1)
                setCircuits(temp)
            }else{
                const empt:Array<string> = []
                setCircuits(empt)
            }
            setFav("♡")
        }
        
    }

    const checkForFavourites = (type:string, data:any) => {
        if(type === 'driver'){
            if(drivers.find(e => e === (data.drivers.forename  + ' ' + data.drivers.surname)) == undefined){
                setFav("♡")
            }else{
                setFav("♥")
            }
        }else if(type === 'constructor'){
            if(constructors.find(e => e === data.constructors.name) == undefined){
                setFav("♡")
            }else{
                setFav("♥")
            }
        }else if(type === 'circuit'){
            if(circuits.find(e => e === data.circuits.name) == undefined){
                setFav("♡")
            }else{
                setFav("♥")
            }
        }
    }
    
    useEffect(() => {
        if(drivers.length != 0){ //This allows for localstorage to be perserved between reloads 
            localStorage.setItem('drivers', JSON.stringify(drivers));
        }
    }, [drivers])
    useEffect(() => {
        if(constructors.length != 0){
            localStorage.setItem('constructors', JSON.stringify(constructors))
        }
    }, [constructors])
    useEffect(() => {
        if(circuits.length != 0){
            localStorage.setItem('circuits', JSON.stringify(circuits))
        }
    }, [circuits])

    if(props.currentView && props.currentView[0]== "Standings"){
        return <Standings id="SM-standings" data={props.standingsData} fav={fav} favHandle={handler} favCheck={checkForFavourites}></Standings>
    }
    if(props.currentView && props.currentView[0]== "Results"){
        return <Results id="SM-standings" raceData={props.singularRaceData} qualifyingData={props.qualifyingData} resultsData={props.resultsData} fav={fav} favHandle={handler} favCheck={checkForFavourites}> </Results>
    }
    return <div id="SM-standings"> Please select either the results or the standings of a race on the left side</div>
}