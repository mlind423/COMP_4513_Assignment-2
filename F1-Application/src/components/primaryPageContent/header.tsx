import YearSelector from "./yearSelector"
import Modal from "../modalComponents/modal"
import { useState } from "react";

export default function Header(props:any) {
    const [favData, setFavData] = useState(Array<string>);
    //Simply renders the top header
    const handleModal = (c:any) => {
        if(c.target.id === "SM-favorites"){
            (document.getElementById(`favourites`) as HTMLFormElement).showModal()
            setFavData([])
        }else{
            (document.getElementById(`about`) as HTMLFormElement).showModal()
        }
       
    }
    return(
        <header id="SM-header"> 
            <div id="SM-year-container">
                <YearSelector  setter={props.setCurrentYear} setters={props.setters} ></YearSelector>
            </div>
            <h3 id="SM-title" className="text-2xl">F1 Dashboard</h3>
            <nav id="SM-nav">
                <Modal type='favourites' />
                <Modal type='about'/>
                <button className="text-primary-content btn btn-primary btn-sm rounded-full  border-transparent text-primary-content border-0 hover:btn-secondary hover:text-secondary-content" id="SM-favorites" onClick={handleModal} >Favorites</button>
                <button className="text-primary-content btn btn-primary btn-sm rounded-full  border-transparent text-primary-content border-0 hover:btn-secondary hover:text-secondary-content" onClick={handleModal}>About</button>
            </nav>
        </header>
    )
}