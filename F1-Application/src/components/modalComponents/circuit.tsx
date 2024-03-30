export default function CircuitContent(props:any) {
    if(props.type == 'circuit'){
        return(
            <div className="flex flex-col w-full modal-box w-100 px-3 py-3">
                <h2>Circuits</h2>
            </div>
        )
    }else{
        return (null)
    }
}