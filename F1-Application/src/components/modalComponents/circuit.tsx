import FavButton from "./favouritesButton"
import ImgRequest from "./imgRequest"
import { useState } from "react"
export default function CircuitContent(props:any) {
    let [source, setSource] = useState();
    // Currently source will go unused, as we have no database for images. Given we did have one though
    // We would request for our image here
    if(props.type == 'circuit'){
        return(
            <div className="flex flex-col size-auto modal-box w-auto max-w-none px-3 py-3">
                <h1>Circuit details</h1>
                <div className="grid h-auto flex-grow card bg-base-300 rounded-box grid grid-cols-2 gap-4 place-items-center justify-items-end">
                    <div className="gird grid-rows-4 gap-4 px-4 py-3 w-max justify-self-start">
                        <p>Name: {props.data.circuits.name}</p>
                        <p>Location: {props.data.circuits.location}</p>
                        <p>Country: {props.data.circuits.country}</p>
                        <a className="underline text-sky-400 hover:text-sky-200" href={props.data.url} >Wiki Page</a>
                    </div>
                    <div className="mr-10">
                        <FavButton type={props.type} data={props.data} fav={props.fav} favHandle={props.favHandle}/>
                    </div>
                    
                </div>
                <div className="divider"></div>
                <div className="flex flex-col size-auto lg:flex-row">
                    <div className="grid flex-grow size-auto card bg-base-300 rounded-box place-items-center px-3 py-3">
                        <ImgRequest className="h-max max-w-lg" src={source} srcDefault="https://placehold.co/1920x1080"></ImgRequest>
                    </div>
                    <div className="divider lg:divider-horizontal">

                    </div>
                    <div className="grid flex-grow size-auto card bg-base-300 rounded-box place-items-center px-3 py-3">
                        <ImgRequest className="h-max max-w-lg" src={source} srcDefault="https://placehold.co/600x400"></ImgRequest>
                    </div>
                </div>
            </div>
        )
    }else{
        return (null)
    }
}