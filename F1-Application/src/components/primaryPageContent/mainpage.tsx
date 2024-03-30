import { useState ,useEffect} from "react"
import YearSelector from "./yearSelector"
import PrimaryPageContent from "./primaryPageContent"
import Modal from "../modalComponents/modal"
//const [selectedYear, setYear] = useState();



export default function MainPage() {
    
    const [currentYear, setCurrentYear] = useState();
    
    
    const handleModal = (c:any) => {
        (document.getElementById(`favourites`) as HTMLFormElement).showModal()
    }

    return (
    <div id="mainBody">
        <header id="SM-header"> 
            <div id="SM-year-container">
                <YearSelector  setter={setCurrentYear} ></YearSelector>
            </div>
            <h3 id="SM-title">F1 Dashboard Babey</h3>
            <nav id="SM-nav">
                <Modal type='favourites' />
                <button className="btn rounded-full bg-inherit border-transparent text-inherit border-0" id="SM-favorites" onClick={handleModal} >Favorites</button>
                <button id="SM-about">About</button>
            </nav>
        </header>

        <PrimaryPageContent currentYear={currentYear}>


        </PrimaryPageContent>
    </div>
    )
}