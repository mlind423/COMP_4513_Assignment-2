import Races from "./races";
import RightContainer from "./rightContainer";
import { useEffect } from "react";
export default function PrimaryPageContent(props:any) {

// Fetches data for the left pane race selector, Refreshes whenever the selected year is changed
useEffect( () => {
    let url = "https://absorbed-deluxe-nyala.glitch.me/api/races/season/" + props.currentYear;
    console.log("fetching raceData ... here to check if I've gone infinite");
    fetch (url)
    .then( resp => resp.json() )
    .then( data => { props.setters.setRaceData(data); });
    
},[props.setters.setRaceData,props.currentYear]);
// Fetches data for the Right pane when selecting the results, otherwise does nothing
useEffect(()=> {
    if (props.getters.currentView && props.getters.currentView[0]== "Results") {
        let url = "https://absorbed-deluxe-nyala.glitch.me/api/qualifying/" + props.getters.currentView[1];
        console.log("fetching Qualifying/Results Data ... here to check if I've gone infinite");
        fetch (url)
        .then( resp => resp.json() )
        .then( data => {props.setters.setQualifyingData(data); })
        url = "https://absorbed-deluxe-nyala.glitch.me/api/results/" + props.getters.currentView[1];
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { props.setters.setResultsData(data); })
        url = "https://absorbed-deluxe-nyala.glitch.me/api/races/" + + props.getters.currentView[1];
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { props.setters.setSingularRaceData(data); })
    }
},[props.setters.setResultsData,props.setters.setQualifyingData, props.setters.setSingularRaceData,props.getters.currentView]);
// Fetches data for the Right pane when selecting the standings, otherwise does nothing
useEffect(()=> {
    if (props.getters.currentView && props.getters.currentView[0]== "Standings") {
        let url = "https://absorbed-deluxe-nyala.glitch.me/api/standings/"+ props.getters.currentView[1]+"/constructors" ;
        console.log("fetching Standings Data ... here to check if I've gone infinite");
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { props.setters.setConstructorsStandings(data); })
        url = "https://absorbed-deluxe-nyala.glitch.me/api/standings/"+ props.getters.currentView[1]+"/drivers";
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { props.setters.setDriversStandings(data); })
    }
},[props.setters.setConstructorsStandings,props.setters.setDriversStandings,props.getters.currentView]);


const standingsData = {
    drivers: props.getters.driversStandings,
    constructors: props.getters.constructorsStandings
}

// The following is to render only the left pane when the raceData is unavailable, as it means the API needs more time to wake up.

if (!props.getters.raceData){
    return (
        <div id="SM-main">
            <Races id="SM-Left" raceData={props.getters.raceData} setCurrentView={props.setters.setCurrentView}></Races>
        </div>
    )
}
if (props.getters.raceData.error){
    return (
        <div id="SM-main">
            <Races id="SM-Left" raceData={props.getters.raceData} setCurrentView={props.setters.setCurrentView}></Races>
        </div>
    )
}
return (
    <div id="SM-main">
        <Races id="SM-Left" raceData={props.getters.raceData} setters={props.setters} ></Races>
        <RightContainer standingsData={standingsData} singularRaceData={props.getters.singularRaceData} raceData={props.getters.raceData} 
        qualifyingData={props.getters.qualifyingData} resultsData={props.getters.resultsData} currentView={props.getters.currentView}></RightContainer>
    </div>
)
}