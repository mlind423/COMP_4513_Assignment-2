import Standings from "./standings";
import Results from "./results"
export default function RightContainer(props:any) {

    if(props.currentView && props.currentView[0]== "Standings"){
        return<Standings id="SM-standings" data={props.standingsData}></Standings>
    }
    if(props.currentView && props.currentView[0]== "Results"){
        return<Results id="SM-standings" raceData={props.singularRaceData} qualifyingData={props.qualifyingData} resultsData={props.resultsData}> </Results>
    }
    return <div id="SM-standings"> Please select either the results or the standings of a race on the left side</div>
}