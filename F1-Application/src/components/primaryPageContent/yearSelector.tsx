export default function YearSelector(props) {
    return(
        <select id="SM-year">
            {props.years.map(c => <option value={c.year} key={c.year}>{c.year}</option>)}

        </select>
    )
    
}