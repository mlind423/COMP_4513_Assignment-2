import { Form } from "react-router-dom"

export default function Root() {
    return (
        <div className="SM-Login-Background">
            <div className="hero min-h-screen ">
                <div className="hero-content text-center bg-base-200 rounded-3xl">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">Please Log in when you get the chance</p>
                        <Form method="get" action="/main">
                            <label htmlFor="username">Username:</label>
                            <input type="text" placeholder="Username" name="username" className="input input-bordered w-full max-w-xs" />
                            <br></br>
                            <label htmlFor="password">Password:</label>
                            <input type="text" placeholder="Password" name="password" className="input input-bordered w-full max-w-xs" />
                            <br></br>
                            <input type="submit" value="Submit" className="btn" />
                            
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}