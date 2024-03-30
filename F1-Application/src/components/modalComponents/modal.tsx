import DriverContent from "./driver"
import ConstructorContent from "./constructor"
import FavouriteContent from "./favourites"
import CircuitContent from "./circuit"
export default function Modal(props:any) {
    //onClick={() => document.getElementById(`${props.refId}`).showModal()}
    if(props.data != undefined){
        return (
            <div>
                <dialog id={props.type} className="modal w-auto">
                    <div className="modal-box px-10 py-10 w-4/5 overflow-hidden">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <ConstructorContent type={props.type}/>
                        <DriverContent type={props.type} data={props.data}/> 
                        <CircuitContent type={props.type} data={props.data}/>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        )
    }else if(props.type == 'favourites'){
        return(
            <div>
                <dialog id={props.type} className="modal w-auto">
                    <div className="modal-box px-10 py-10 w-4/5 overflow-hidden">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <FavouriteContent type={props.type}/>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        )
    }
    else{ //Return dummy modal to prevent errors 
        return(<div>
            <dialog id={props.type} className="modal w-auto">
                <div className="modal-box px-10 py-10 w-4/5 overflow-hidden">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>)
    }
    
}