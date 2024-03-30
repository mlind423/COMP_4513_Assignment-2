import { useEffect, useState } from "react"
export default function FavButton (props:any) {
    const [drivers, setDrivers] = useState(Array<string>) 
    const [constructors, setConstructors] = useState(Array<string>)
    const [circuits, setCircuits] = useState(Array<string>)
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
    //For now I am just adding the ref for each since I dont know what I want to display in the favourites tab
    const addToFavourites = () =>{
        if(props.type === 'driver'){
            setDrivers(JSON.parse(localStorage.getItem('drivers') || '[]'))
            const temp:string[] = [...drivers, props.data.drivers.driverRef]
            setDrivers(temp)
        }else if(props.type === 'constructor'){
            setConstructors(JSON.parse(localStorage.getItem('constructors') || '[]'))
            const temp:string[] = [...constructors, props.data.constructors.constructorRef]
            setConstructors(temp)
        }else if(props.type === 'circuit'){
            setCircuits(JSON.parse(localStorage.getItem('circuits') || '[]'))
            const temp:string[] = [...circuits, props.data.circuits.name]
            setCircuits(temp)
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