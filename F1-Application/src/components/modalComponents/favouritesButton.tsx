export default function FavButton (props:any) {
    function handle () {
        props.favHandle(props.type, props.data)
    }
    return(
        <button className="btn text-3xl text-green-500 btn-circle" onClick={handle}>{props.fav}</button>
    )
}