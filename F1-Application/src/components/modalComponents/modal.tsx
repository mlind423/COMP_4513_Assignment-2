import DriverContent from "./driver"
import ConstructorContent from "./constructor"
import FavouriteContent from "./favourites"
import CircuitContent from "./circuit"
import AboutContent from "./about"
export default function Modal(props:any) {
    //onClick={() => document.getElementById(`${props.refId}`).showModal()}
    if(props.data != undefined){
        return (
            <div className="size-auto">
                <dialog id={props.type} className="modal w-100vw">
                    <div className="modal-box px-10 py-10 max-w-none w-auto overflow-hidden">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <ConstructorContent type={props.type} data={props.data}/>
                        <DriverContent type={props.type} data={props.data}/> 
                        <CircuitContent type={props.type} data={props.data}/>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        )
    }else{ //this modal functions as a dummy modal as well as the favourites modal 
        return(
            <div>
                <dialog id={props.type} className="modal w-auto">
                    <div className="modal-box px-10 py-10 w-4/5 overflow-hidden">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <FavouriteContent type={props.type}/>
                        <AboutContent type={props.type}/>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        )
    }
    // else{ //Return dummy modal to prevent errors 
    //     return(<div>
    //         <dialog id={props.type} className="modal w-auto">
            
    //         </dialog>
    //     </div>)
    // }
    
}