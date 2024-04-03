import { useState} from "react"
import YearSelector from "./yearSelector"
import PrimaryPageContent from "./primaryPageContent"
import Modal from "../modalComponents/modal"
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
    
    
    const handleModal = (c:any) => {
        (document.getElementById(`favourites`) as HTMLFormElement).showModal()
    }

    return (
    <div id="mainBody">
        <header id="SM-header"> 
            <div id="SM-year-container">
                <YearSelector  setter={setCurrentYear} setters={setters} ></YearSelector>
            </div>
            <h3 id="SM-title">F1 Dashboard Babey</h3>
            <nav id="SM-nav">
                <Modal type='favourites' />
                <button className="text-primary-content btn btn-primary btn-sm rounded-full  border-transparent text-primary-content border-0" id="SM-favorites" onClick={handleModal} >Favorites</button>
                <button className="text-primary-content btn btn-primary btn-sm rounded-full  border-transparent text-primary-content border-0">About</button>
            </nav>
        </header>

        <PrimaryPageContent currentYear={currentYear} setters={setters} getters={getters}>


        </PrimaryPageContent>
    </div>
    )
}