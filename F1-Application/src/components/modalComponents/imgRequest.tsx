export default function ImgRequest(props:any) {
    if(props.src){
        return <img className="h-max max-w-lg" src={props.src}></img>
    }
    else{
        return <img className="h-max max-w-lg" src={props.srcDefault}></img>
    }
}