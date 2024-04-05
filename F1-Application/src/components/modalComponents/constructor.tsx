import FavButton from "./favouritesButton"
export default function ConstructorContent(props: any) {
    // I Should move this to a different file since it will need to be used on multiple modals
    if (props.type == "constructor") {//This prevents the driver formatting from appearing in a different modal 
        return (
            <div className="flex flex-col w-full modal-box w-100 px-3 py-3">
                <h1>Constructor details</h1>
                <div className="flex w-full">
                    <div className="grid h-auto flex-grow card bg-base-300 rounded-box grid grid-cols-2 gap-4 place-items-center justify-items-end">
                        <div className="gird grid-rows-5 gap-4 px-3 py-3 w-max justify-self-start">
                            <p>Name: {props.data.constructors.name}</p>
                            <p>Nationality: {props.data.constructors.nationality}</p>
                            <a className="underline text-sky-400 hover:text-sky-200" href={props.data.constructors.url}>Wiki Page</a>
                        </div>
                        <div className="mr-10">
                            <FavButton type={props.type} data={props.data} fav={props.fav} favHandle={props.favHandle}/>
                        </div>
                    </div>
                </div>
                <div className="grid size-auto card bg-base-300 rounded-box place-items-center">
                    <img className="object-contain max-w-md m-4" src="https://placehold.co/600x400"></img>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}