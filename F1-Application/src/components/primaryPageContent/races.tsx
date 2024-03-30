export default function Races(props:any) {

    //This will change the display on the right when clicked
    const clickhandler = (c:any) =>{
        let view = c.target.value.split(",");
        props.setCurrentView(view);
    }
    if (!props.raceData){
        return(null)
    } 
    else if (props.raceData.error){
        return(null)
    }
    else{
        return(
            <div id="a">
                <ul id="SM-races-List">
                    <li>
                        <div className="SM-races-Round">#</div>
                        <div className="SM-races-Name">Track</div>
                        <div className="SM-races-Results">Results</div>
                        <div className="SM-reces-Standings">Standings</div>
                    </li>
                    {props.raceData.map((c:any) =>{
                        return(
                            <li key={c.round}>
                                <div className="SM-races-Round">{c.round}</div>
                                <div className="SM-races-Name">{c.name}</div>
                                <button className="SM-races-Results btn btn-sm rounded-full bg-inherit border-transparent text-inherit border-0" value={"Results," + c.raceId} onClick={clickhandler}>Results</button>
                                <button className="SM-reces-Standings btn btn-sm rounded-full bg-inherit border-transparent text-inherit border-0" value={"Standings," + c.raceId}  onClick={clickhandler}>Standings</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    

    
}