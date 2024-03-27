import DriverContent from "./driver"
import ConstructorContent from "./constructor"
export default function Modal(props) {
    return (
        <div>
            <button className="btn btn-sm rounded-full bg-inherit border-transparent text-inherit border-0" onClick={() => document.getElementById(`${props.refId}`).showModal()}>{props.text}</button>
            <dialog id={props.refId} className="modal w-auto">
                <div className="modal-box px-10 py-10 w-4/5">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <ConstructorContent type={props.type}/>
                    <DriverContent type={props.type} surname={props.surname} forename={props.forename}/> 
                    
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}