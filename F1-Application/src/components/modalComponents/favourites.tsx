export default function FavouriteContent(props:any) {

    if (props.type == 'favourites') {
        return (
            <div className="flex flex-col w-full modal-box w-100 px-3 py-3">
                <h2>favorites</h2>
            </div>
        )
    } else {
        return (null)
    }
}