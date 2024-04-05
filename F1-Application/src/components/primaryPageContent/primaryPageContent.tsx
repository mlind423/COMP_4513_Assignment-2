import Races from "./races";
import RightContainer from "./rightContainer";
import { useEffect } from "react";
export default function PrimaryPageContent(props:any) {


useEffect( () => {
    let url = "https://absorbed-deluxe-nyala.glitch.me/api/races/season/" + props.currentYear;
    console.log("fetching raceData ... here to check if I've gone infinite");
    fetch (url)
    .then( resp => resp.json() )
    .then( data => { props.setters.setRaceData(data); });
    
},[props.setters.setRaceData,props.currentYear]);
useEffect(()=> {
    if (props.getters.currentView && props.getters.currentView[0]== "Results") {
        let url = "https://absorbed-deluxe-nyala.glitch.me/api/qualifying/" + props.getters.currentView[1];
        console.log("fetching Qualifying/Results Data ... here to check if I've gone infinite");
        console.log("Results url is" + url);
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

useEffect(()=> {
    if (props.getters.currentView && props.getters.currentView[0]== "Standings") {
        let url = "https://absorbed-deluxe-nyala.glitch.me/api/standings/"+ props.getters.currentView[1]+"/constructors" ;
        console.log("fetching Standings Data ... here to check if I've gone infinite");
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { props.setters.setConstructorsStandings(data); })
        url = "https://absorbed-deluxe-nyala.glitch.me/api/standings/"+ props.getters.currentView[1]+"/drivers";
        console.log("DriverStandings url is " + url);
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { props.setters.setDriversStandings(data); })
    }
},[props.setters.setConstructorsStandings,props.setters.setDriversStandings,props.getters.currentView]);


const standingsData = {
    drivers: props.getters.driversStandings,
    constructors: props.getters.constructorsStandings
}
//Necessary to add on additional circuit data 
//https://absorbed-deluxe-nyala.glitch.me/api/races/1052
// const singularRaceData = [{"year":2021,"round":1,"name":"Bahrain Grand Prix","date":"2021-03-28","time":"15:00:00","url":"http://en.wikipedia.org/wiki/2021_Bahrain_Grand_Prix","fp1_date":"2021-03-26","fp1_time":null,"fp2_date":"2021-03-26","fp2_time":null,"fp3_date":"2021-03-27","fp3_time":null,"quali_date":"2021-03-27","quali_time":null,"sprint_date":null,"sprint_time":null,"circuits":{"name":"Bahrain International Circuit","country":"Bahrain","location":"Sakhir"}}]
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