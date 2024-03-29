export default function FavouriteContent(props) {
    
    if(props.type == 'favourites'){
        return(
            <h2>favorites</h2>
        )
    }else{
        return(null)
    }
}