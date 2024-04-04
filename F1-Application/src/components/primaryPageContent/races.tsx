export default function Races(props:any) {

    //This will change the display on the right when clicked
    const clickhandler = (c:any) =>{
        let view = c.target.value.split(",");
        props.setters.setCurrentView(view);
        props.setters.setDriversStandings();
        props.setters.setConstructorsStandings();
        props.setters.setQualifyingData();
    }
    if (!props.raceData){
        return (
            <div className="SM-Left">
                <span className="loading loading-spinner loading-lg"></span>
                <p>This may take a while, Glitch API is waking up</p>
            </div>
        )
        ;
    } 
    if (props.raceData.error == "Put in a year silly :p"){
        console.log(props.raceData.error)
        return <div id="SM-Left">Welcome, Please select a year to begin viewing races </div>;
    }
    if (props.raceData.error){
        console.log(props.raceData.error)
        return <div id="SM-Left"> It seems we are having issues finding the race data, please email me at spencer.james.reid@gmail.com to report this.</div>
    }
    else{
        return(
            <div id="SM-Left">
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
                                <button className="text-primary-content btn btn-primary btn-sm rounded-full m-2 border-transparent text-primary-content border-0" value={"Results," + c.raceId} onClick={clickhandler}>Results</button>
                                <button className="text-primary-content btn btn-primary btn-sm rounded-full m-2 border-transparent text-primary-content border-0" value={"Standings," + c.raceId}  onClick={clickhandler}>Standings</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    

    
}