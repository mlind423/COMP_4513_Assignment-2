import { useEffect, useState } from "react"
export default function FavButton (props:any) {
    const [drivers, setDrivers] = useState(Array<string>) 
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
            const temp:string[] = [...drivers, props.data.drivers.driverRef]
            setDrivers(temp)
        }else if(props.type === 'constructor'){

        }else if(props.type === 'circuit'){

        }
    }
    
    const removeFromFavourites = () => {

    }
    const checkForFavourites = (type:string) => {

    }
    
    useEffect(() => {
        localStorage.removeItem('drivers')
        localStorage.setItem('drivers', JSON.stringify(drivers));
    }, [drivers])

    return(
        <button className="btn text-3xl text-green-500 btn-circle" onClick={handler}>{fav}</button>
    )
}