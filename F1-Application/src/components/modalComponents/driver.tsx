import FavButton from "./favouritesButton";
import ImgRequest from "./imgRequest";
export default function DriverContent(props: any) {
    const calcAge = () => {
        const dob: string = props.data.drivers.dob
        const dobArray: string[] = dob.split('-')
        const date = new Date();
        const currentYear: number = date.getFullYear();
        const currentMonth: number = date.getMonth();
        const currentDay: number = date.getDay();
        const age: number = (((currentYear - Number(dobArray[0])) * 365) + ((currentMonth - Number(dobArray[1])) * 31) + (currentDay - Number(dobArray[2]))) / 365
        return Math.floor(age)
    }

    // let [source, setSource] = useState();
    // Currently source will go unused, as we have no database for images. Given we did have one though
    // We would request for our image here

    if (props.type == "driver") {//This prevents the driver formatting from appearing in a different modal 
        calcAge()
        return (
            <div className="flex flex-col w-full modal-box w-100 px-3 py-3">
                <h1 className="text-xl">Driver details</h1>
                <div className="flex w-full">
                    <div className="grid h-auto flex-grow card bg-base-300 rounded-box grid grid-cols-2 gap-4 place-items-center justify-items-end">
                        <div className="gird grid-rows-5 gap-4 px-3 py-3 w-max justify-self-start">
                            <p>Name: {props.data.drivers.forename} {props.data.drivers.surname}</p>
                            <p>Date Of Birth: {props.data.drivers.dob}</p>
                            <p>Nationality: {props.data.drivers.nationality}</p>
                            <p>Age: {calcAge()}</p>
                            <a className="underline text-sky-400 hover:text-sky-200" href={props.data.drivers.url}>Wiki Page</a>
                        </div>
                        <div className="mr-10">
                            <FavButton type={props.type} data={props.data} fav={props.fav} favHandle={props.favHandle}/>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="grid size-auto card bg-base-300 rounded-box place-items-center">
                    <ImgRequest className="object-contain max-w-md m-4" srcDefault="https://placehold.co/600x400"></ImgRequest>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}