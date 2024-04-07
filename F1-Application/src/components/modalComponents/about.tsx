export default function AboutContent(props:any) {

    if (props.type == 'about') {
        return (
            <div className="flex flex-col w-full modal-box w-100 px-3 py-3">
                <h2 className="text-lg">About Us:</h2>
                <div className="flex flex-col size-auto lg:flex-row">
                    <div className="grid flex-grow w-4/5 h-auto card bg-base-300 rounded-box place-items-start px-3 py-3">
                        <p>Credits: <br></br>
                        <a href='https://github.com/mlind423' className="hover:text-sky-400">Matthew Lindstrom</a><br></br>
                        <a href="https://github.com/Spencerreids" className="hover:text-sky-400">Spencer Reid</a><br></br>
                        <a href="https://github.com/mlind423/COMP_4513_Assignment-2" className="text-sky-600 underline hover:text-sky-400">Git Repo</a></p>
                    </div>
                    <div className="divider"> </div>
                    <div className="grid flex-grow size-auto card bg-base-300 rounded-box place-items-start px-3 py-3">
                        <p>This website displays F1 race information from our API which was created using Node.js and Express.<br></br> It was created using React, Vite, DaisyUI, TailwindCSS, Typescript, CSS, and ReactRouter. </p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}