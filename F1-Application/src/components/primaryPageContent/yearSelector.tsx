import { useState, useEffect } from "react";
export default function YearSelector(props:any) {
    const [years, setYears] = useState();
    useEffect( () => {


        let url = "https://absorbed-deluxe-nyala.glitch.me/api/seasons";
        console.log("fetching ... here to check if I’ve gone infinite");
        fetch (url)
        .then( resp => resp.json() )
        .then( data => { setYears(data); })
    }, [] );
    const changeHandler = (c:any) =>{
        for (const curr in props.setters){
            props.setters[curr]();
        }
        props.setter(c.target.value);
    }
    if (years){
        return(
            <select id="SM-year" className="select select-bordered w-full max-w-xs h-12" onChange={changeHandler}>
                <option disabled selected>Season</option>
                {years.map((c:any) => <option  value={c.year} key={c.year}>{c.year}</option>)}

            </select>
        )
    }
    else {}
    
}