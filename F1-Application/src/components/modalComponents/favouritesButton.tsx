import { setDriver } from "localforage"
import { useEffect, useState } from "react"
export default function FavButton (props) {
    const [drivers, setDrivers] = useState([]) //I need to create an object that I can add to for the state
    const [fav, setFav] = useState('♡')
    
    const handler = () => {
        if (fav == '♡') {
            setFav("♥")
            addToFavourites()
        } else {
            setFav("♡")
            removeFromFavourites()
        }
    }
    const addToFavourites = () =>{
        if(props.type === 'driver'){
            setDrivers(JSON.parse(localStorage.getItem('drivers') || '[]'))
            const temp = [...drivers, props.data]
            setDrivers(temp)
        }else if(props.type === 'constructor'){

        }else if(props.type === 'circuit'){

        }
    }
    useEffect(() => {
        localStorage.removeItem('drivers')
        localStorage.setItem('drivers', JSON.stringify(drivers));
    }, [drivers])
    const removeFromFavourites = () => {

    }
    const checkForFavourites = () => {

    }

    return(
        <button className="btn text-3xl text-green-500 btn-circle" onClick={handler}>{fav}</button>
    )
}