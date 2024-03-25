export default function Races(props) {

    //This will change the display on the right when clicked
    const clickhandler = (c) =>{
        alert("You should be viewing " + c.target.value);
    }

    return(
        <div id="a">
            <ul id="SM-races-List">
                {props.raceData.map(c =>{
                    return(
                        <li key={c.round}>
                            <div className="SM-races-Round">{c.round}</div>
                            <div className="SM-races-Name">{c.name}</div>
                            <button className="SM-races-Results" value="Results" onClick={clickhandler}>Results</button>
                            <button className="SM-reces-Standings" value="Standings" onClick={clickhandler}>Standings</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}