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
            const temp:string[] = [...drivers, value]
            setDrivers(temp)
            setFav("♥")
        }else if(type === 'constructor'){
            const temp:string[] = [...constructors, data.constructors.name]
            setConstructors(temp)
            setFav("♥")
        }else if(type === 'circuit'){
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
                const temp:string[] = drivers
                temp.splice(indx, 1)
                setDrivers(temp)
                localStorage.setItem('drivers', JSON.stringify(drivers));
            }else{
                const empt:Array<string> = []
                setDrivers(empt)
                localStorage.setItem('drivers', '')
            }
            
            setFav("♡")
        }else if(type === 'constructor'){
            if(constructors.length != 1){
                const value = data.constructors.name
                const indx = constructors.indexOf(value)
                const temp:string[] = constructors
                temp.splice(indx, 1)
                setConstructors(temp)
                localStorage.setItem('constructors', JSON.stringify(constructors))
            }else{
                const empt:Array<string> = []
                setConstructors(empt)
                localStorage.setItem('constructors', '')
            }
            
            setFav("♡")
        }else if(type === 'circuit'){
            if(circuits.length != 1){
                const value = data.circuits.name
                const indx = circuits.indexOf(value)
                const temp:string[] = circuits
                temp.splice(indx, 1)
                setCircuits(temp)
                localStorage.setItem('circuits', JSON.stringify(circuits))
            }else{
                const empt:Array<string> = []
                setCircuits(empt)
                localStorage.setItem('circuits', "")
            }
            setFav("♡")
            
        }
        
    }

    const checkForFavourites = (type:string, data:any) => {
        setDrivers(JSON.parse(localStorage.getItem('drivers') || '[]'))
        setConstructors(JSON.parse(localStorage.getItem('constructors') || '[]'))
        setCircuits(JSON.parse(localStorage.getItem('circuits') || '[]'))
        if(type === 'driver'){
            if(drivers.find((e:any) => e === (data.drivers.forename  + ' ' + data.drivers.surname)) == undefined){
                setFav("♡")
            }else{
                setFav("♥")
            }
        }else if(type === 'constructor'){
            if(constructors.find((e:any) => e === data.constructors.name) == undefined){
                setFav("♡")
            }else{
                setFav("♥")
            }
        }else if(type === 'circuit'){
            if(circuits.find((e:any) => e === data.circuits.name) == undefined){
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

    useEffect(() => {
        setDrivers(JSON.parse(localStorage.getItem('drivers') || '[]'))
        setConstructors(JSON.parse(localStorage.getItem('constructors') || '[]'))
        setCircuits(JSON.parse(localStorage.getItem('circuits') || '[]'))
    }, [])

    //Selective Rendering, based on the values of the buttons in the races pane
    //Each only passes the props it should need
    if(props.currentView && props.currentView[0]== "Standings"){
        return <Standings id="SM-standings" data={props.standingsData} fav={fav} favHandle={handler} favCheck={checkForFavourites}></Standings>
    }
    if(props.currentView && props.currentView[0]== "Results"){
        return <Results id="SM-standings" raceData={props.singularRaceData} qualifyingData={props.qualifyingData} resultsData={props.resultsData} fav={fav} favHandle={handler} favCheck={checkForFavourites}> </Results>
    }
    return <div id="SM-standings"> Please select either the results or the standings of a race on the left side</div>
}