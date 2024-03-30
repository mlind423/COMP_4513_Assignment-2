import { useState } from "react"
export default function ConstructorContent(props:any) {
    // I Should move this to a different file since it will need to be used on multiple modals
    const [fav, setFav] = useState('♡')
    const handler = () => {
        if (fav == '♡') {
            setFav("♥")
        } else {
            setFav("♡")
        }
    }
    if (props.type == "constructor") {//This prevents the driver formatting from appearing in a different modal 
        return (
            <div className="flex flex-col w-full modal-box w-100 px-3 py-3">
                <h1>Constructor details</h1>
                 
            </div>
        )
    } else {
        return (null)
    }
}