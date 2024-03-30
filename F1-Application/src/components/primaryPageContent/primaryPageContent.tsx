import Races from "./races";
import RightContainer from "./rightContainer";
import { useState, useEffect } from "react";
export default function PrimaryPageContent(props:any) {

const [raceData, setRaceData] = useState();
const [currentView, setCurrentView] = useState();
const [qualifyingData, setQualifyingData] = useState();
const [resultsData, setResultsData] = useState();
const [constructorsStandings, setConstructorsStandings] = useState();
const [driversStandings, setDriversStandings] = useState();
const [singularRaceData, setSingularRaceData] = useState();
useEffect( () => {
    let url = "https://absorbed-deluxe-nyala.glitch.me/api/races/season/" + props.currentYear;
    console.log("fetching raceData ... here to check if I've gone infinite");
    fetch (url)
    .then( resp => resp.json() )
    .then( data => { setRaceData(data); });
    
},[setRaceData,props.currentYear]);
useEffect(()=> {
    if (currentView && currentView[0]== "Results") {
        let url = "https://absorbed-deluxe-nyala.glitch.me/api/qualifying/" + currentView[1];
        console.log("fetching Qualifying/Results Data ... here to check if I've gone infinite");
        console.log("Results url is" + url);
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { setQualifyingData(data); })
        url = "https://absorbed-deluxe-nyala.glitch.me/api/results/" + currentView[1];
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { setResultsData(data); })
        url = "https://absorbed-deluxe-nyala.glitch.me/api/races/" + + currentView[1];
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { setSingularRaceData(data); })
    }
},[setResultsData,setQualifyingData, setSingularRaceData,currentView]);

useEffect(()=> {
    if (currentView && currentView[0]== "Standings") {
        let url = "https://absorbed-deluxe-nyala.glitch.me/api/standings/"+ currentView[1]+"/constructors" ;
        console.log("fetching Standings Data ... here to check if I've gone infinite");
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { setConstructorsStandings(data); })
        url = "https://absorbed-deluxe-nyala.glitch.me/api/standings/"+ currentView[1]+"/drivers";
        console.log("DriverStandings url is " + url);
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { setDriversStandings(data); })
    }
},[setConstructorsStandings,setDriversStandings,currentView]);


const standingsData = {
    drivers: driversStandings,
    constructors: constructorsStandings
}
//Necessary to add on additional circuit data 
//https://absorbed-deluxe-nyala.glitch.me/api/races/1052
// const singularRaceData = [{"year":2021,"round":1,"name":"Bahrain Grand Prix","date":"2021-03-28","time":"15:00:00","url":"http://en.wikipedia.org/wiki/2021_Bahrain_Grand_Prix","fp1_date":"2021-03-26","fp1_time":null,"fp2_date":"2021-03-26","fp2_time":null,"fp3_date":"2021-03-27","fp3_time":null,"quali_date":"2021-03-27","quali_time":null,"sprint_date":null,"sprint_time":null,"circuits":{"name":"Bahrain International Circuit","country":"Bahrain","location":"Sakhir"}}]
    return (
        <div id="SM-main">
            <Races id="a" raceData={raceData} setCurrentView={setCurrentView}></Races>
            <RightContainer standingsData={standingsData} singularRaceData={singularRaceData} raceData={raceData} qualifyingData={qualifyingData} resultsData={resultsData} currentView={currentView}></RightContainer>
            
            {/* <div id="SM-standings">
                <h3>Standings</h3>
                <div id="SM-race-content">
                    <div id="SM-drivers">
                        Blah
                    </div>
                    <div id="SM-constructors">
                        Blah
                    </div>
                </div>
            </div> */}
        </div>
    )
}