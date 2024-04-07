import { useState } from "react"

export default function FavouriteContent(props: any) {
    const driver = JSON.parse(localStorage.getItem('drivers') || '[]')
    const constructor = JSON.parse(localStorage.getItem('constructors') || '[]')
    const circuit = JSON.parse(localStorage.getItem('circuits') || '[]')
    const [rem, setRem] = useState(Array<string>);

    function handleRemove(e:any) {
        rem
        if(e.target.id === 'dr'){
            localStorage.setItem('drivers', '')
        }else if(e.target.id === 'con'){
            localStorage.setItem('constructors', '')
        }else if(e.target.id === 'cir'){
            localStorage.setItem('circuits', '')
        }
        setRem([])
    }


    if (props.type == 'favourites') {
        return (
            <div className="flex flex-col modal-box max-w-none w-full px-3 py-3">
                <h2 className="text-xl">Favorites</h2>
                <div className="flex flex-col lg:flex-row">
                    <div className="text-nowrap overflow-auto grid flex-grow w-auto max-h-60 card bg-base-300 rounded-box place-items-center px-3 py-3 place-content-start">
                    <h2 className="text-lg">Drivers</h2> <button id='dr' onClick={handleRemove} className="text-secondary-content btn btn-secondary btn-sm rounded-full m-2 border-transparent text-secondary-content border-0  hover:btn-primary hover:text-primary-content"> Remove All </button>
                        <ul>
                            {driver.map((e: any, index: number) => {
                                return <li key={index}>{e}</li>
                            })}
                        </ul>
                    </div>
                    <div className="divider lg:divider-horizontal">
                    </div>
                    <div className="text-nowrap w-auto max-h-60 grid flex-grow card bg-base-300 rounded-box place-items-center px-3 py-3 place-content-start">
                        <h2 className="text-lg">Constuctors</h2><button id='con' onClick={handleRemove} className="text-secondary-content btn btn-secondary btn-sm rounded-full m-2 border-transparent text-secondary-content border-0  hover:btn-primary hover:text-primary-content"> Remove All </button>
                        <ul>
                            {constructor.map((e: any, index: number) => {
                                return <li key={index}>{e}</li>
                            })}
                        </ul>
                    </div>
                    <div className="divider lg:divider-horizontal">
                    </div>
                    <div className="text-nowrap w-auto max-h-60 grid flex-grow card bg-base-300 rounded-box place-items-center px-3 py-3 place-content-start">
                        <h2 className="text-lg">Circuits</h2><button id='cir' onClick={handleRemove} className="text-secondary-content btn btn-secondary btn-sm rounded-full m-2 border-transparent text-secondary-content border-0  hover:btn-primary hover:text-primary-content"> Remove All </button>
                        <ul>
                            {circuit.map((e: any, index: number) => {
                                return <li key={index}>{e}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}