import { Link } from "react-router-dom"

function NotFound(){
    return(
        <>
            <div className="flex flex-col justify-center items-center w-full h-screen bg-white">
                <h1 
                    className="text-6xl mb-4 font-mono">
                    [ ERROR 404 ]
                </h1>
                <p 
                    className="text-lg mb-6 font-mono">
                    [ Page Not Found ]
                </p>
                <p 
                    className="text-sm mb-6 font-mono text-center">
                    The page you are looking for might have been removed had its name <br></br>
                    changed or is temporally unavalible.
                </p>
                <Link to="/home" className="bg-black text-white py-2 px-8 border-2 border-solid border-black hover:bg-white hover:text-black transition-all">Return to Home</Link>
            </div>
        </>
    )
}

export default NotFound