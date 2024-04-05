import FavButton from "./favouritesButton"

export default function FavouriteContent(props: any) {
    const driver = JSON.parse(localStorage.getItem('drivers') || '[]')
    const constructor = JSON.parse(localStorage.getItem('constructors') || '[]')
    const circuit = JSON.parse(localStorage.getItem('circuits') || '[]')
    if (props.type == 'favourites') {
        return (
            <div className="flex flex-col w-full modal-box w-100 px-3 py-3">
                <h2>Favorites</h2>
                <div className="flex flex-col size-auto lg:flex-row">
                    <div className="grid flex-grow size-auto card bg-base-300 rounded-box place-items-center px-3 py-3">
                        <ul>
                            {driver.map((e: any, index: number) => {
                                return <li key={index}>{e}</li>
                            })}
                        </ul>
                    </div>
                    <div className="divider lg:divider-horizontal">
                    </div>
                    <div className="grid flex-grow size-auto card bg-base-300 rounded-box place-items-center px-3 py-3">
                        <ul>
                            {constructor.map((e: any, index: number) => {
                                return <li key={index}>{e}</li>
                            })}
                        </ul>
                    </div>
                    <div className="divider lg:divider-horizontal">
                    </div>
                    <div className="grid flex-grow size-auto card bg-base-300 rounded-box place-items-center px-3 py-3">
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