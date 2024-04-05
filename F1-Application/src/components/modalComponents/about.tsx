export default function AboutContent(props:any) {

    if (props.type == 'about') {
        return (
            <div className="flex flex-col w-full modal-box w-100 px-3 py-3">
                <h2>About</h2>
            </div>
        )
    } else {
        return (null)
    }
}