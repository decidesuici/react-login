import { Link } from 'react-router-dom'

function Signup(){
    return(
        <>  
            <div className="flex w-3/4 mx-auto shadow-md mt-20 rounded-md">
                {/* Relleno */}
                <div className="flex bg-gradient-to-tr from-violet-500 to-pink-500 w-1/3 justify-center items-center rounded-tr-md rounded-br-md">
                    {/* <div className="w-40 h-40 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"></div> */}
                </div>

                {/* Formulario */}
                <div className="w-2/3 text-center bg-white rounded-tl-md rounded-bl-md">
                    <div className="mt-20">
                        <h1 className="mb-2 text-2xl">
                            Sign Up Now!
                        </h1>
                        <h3 className=" text-sm">
                            Create an account now
                        </h3>
                    </div>
                    <div className="mt-6">
                        <div className="mb-4">
                            <label className="block w-1/2 mx-auto text-left text-xs mb-2">
                                Username
                            </label>
                            <input 
                                className="border-solid border-2 border-stone-200 w-1/2 rounded-md py-1 px-2 text-xs"
                                type="email">
                            </input>
                        </div>
                        <div className="mb-4">
                            <label className="block w-1/2 mx-auto text-left text-xs mb-2">
                                E-mail:
                            </label>
                            <input 
                                className="border-solid border-2 border-stone-200 w-1/2 rounded-md py-1 px-2 text-xs"
                                type="email">
                            </input>
                        </div>
                        <div className="mb-4">
                            <label className="block w-1/2 mx-auto text-left text-xs mb-2">
                                Password:
                            </label>
                            <input 
                                className="border-solid border-2 border-stone-200 w-1/2 rounded-md py-1 px-2 text-xs"
                                type="password">
                            </input>
                        </div>
                        <div className="mb-4">
                            <label className="block w-1/2 mx-auto text-left text-xs mb-2">
                                Repeat Password:
                            </label>
                            <input 
                                className="border-solid border-2 border-stone-200 w-1/2 rounded-md py-1 px-2 text-xs"
                                type="password">
                            </input>
                        </div>
                        <div className="flex flex-col justify-center w-1/2 mx-auto mt-2">
                            <Link to="/auth/login" className="text-sm underline">
                                You have an account, log in now!
                            </Link>
                            <Link to="/home" className="text-sm underline mt-2">
                                Go to home
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 mb-20">
                        <button className="bg-violet-500 text-white px-10 py-1 rounded-lg border-solid border-2 border-violet-500 transition-all hover:bg-white hover:text-violet-500">
                            Create My Account
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup