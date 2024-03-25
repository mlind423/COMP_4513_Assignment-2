import { useState } from "react"
import YearSelector from "./yearSelector"
import PrimaryPageContent from "./primaryPageContent"
//const [selectedYear, setYear] = useState();
export default function MainPage(props) {
    return (
    <div id="mainBody">
        <header id="SM-header"> 
            <div id="SM-year-container">
                <YearSelector years={props.data.years} ></YearSelector>
                {/* <select id="SM-year">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select> */}
            </div>
            <h3 id="SM-title">F1 Dashboard Babey</h3>
            <nav id="SM-nav">
                <button id="SM-favorites">Favorites</button>
                <button id="SM-about">About</button>
            </nav>
        </header>

        <PrimaryPageContent>


        </PrimaryPageContent>
        {/* <div id="SM-main">
            <p id="a">a</p>
            <div id="SM-standings">
                <h3>Standings</h3>
                <div id="SM-race-content">
                    <div id="SM-drivers">
                        Blah
                    </div>
                    <div id="SM-constructors">
                        Blah
                    </div>
                </div>
            </div>
        </div> */}
    </div>
    )
}