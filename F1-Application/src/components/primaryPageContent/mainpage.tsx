import { useState} from "react"

import PrimaryPageContent from "./primaryPageContent"
import Header from "./header";
//const [selectedYear, setYear] = useState();



export default function MainPage() {
    
    const [currentYear, setCurrentYear] = useState();
    const [raceData, setRaceData] = useState();
    const [currentView, setCurrentView] = useState();
    const [qualifyingData, setQualifyingData] = useState();
    const [resultsData, setResultsData] = useState();
    const [constructorsStandings, setConstructorsStandings] = useState();
    const [driversStandings, setDriversStandings] = useState();
    const [singularRaceData, setSingularRaceData] = useState();
    

    const getters = 
    {
        raceData:raceData,
        currentView:currentView,
        qualifyingData:qualifyingData,
        resultsData:resultsData,
        constructorsStandings:constructorsStandings,
        driversStandings:driversStandings,
        singularRaceData:singularRaceData 
    }
    const setters = {
        setRaceData:setRaceData,
        setCurrentView:setCurrentView,
        setQualifyingData:setQualifyingData,
        setResultsData:setResultsData,
        setConstructorsStandings:setConstructorsStandings,
        setDriversStandings:setDriversStandings,
        setSingularRaceData:setSingularRaceData
    }
    

    return (
    <div id="mainBody">
        <Header setters={setters} setCurrentYear={setCurrentYear}></Header>
        <PrimaryPageContent currentYear={currentYear} setters={setters} getters={getters}></PrimaryPageContent>
    </div>
    )
}