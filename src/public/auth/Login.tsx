import { Link } from 'react-router-dom'

function Login(){
    return (
        <>  
            <div className="flex w-3/4 mx-auto shadow-md mt-20 rounded-md">

                {/* Formulario */}
                <div className="w-2/3 text-center bg-white rounded-tl-md rounded-bl-md">
                    <div className="mt-20">
                        <h1 className="mb-2 text-2xl">
                            Welcome Back
                        </h1>
                        <h3 className=" text-sm">
                            Welcome back! Please enter your details
                        </h3>
                    </div>
                    <div className="mt-6">
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
                        <div className="flex justify-between w-1/2 mx-auto">
                            <div>
                                <input type="checkbox"></input>
                                <label className="text-sm ml-2">
                                    Remember my password
                                </label>
                            </div>
                            <Link to="/auth/recover-password" className="text-sm underline">
                                Forgot my password
                            </Link>
                        </div>
                        <div className="flex justify-between w-1/2 mx-auto mt-3">
                            <Link to="/home" className="text-sm underline">
                                Go to home
                            </Link>
                            <Link to="/auth/signup" className="text-sm underline">
                                Create an account
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 mb-20">
                        <button className="bg-violet-500 text-white px-10 py-1 rounded-lg border-solid border-2 border-violet-500 transition-all hover:bg-white hover:text-violet-500">
                            Log In
                        </button>
                    </div>
                </div>

                {/* Relleno */}
                <div className="flex bg-gradient-to-tr from-violet-500 to-pink-500 w-1/3 justify-center items-center rounded-tr-md rounded-br-md">
                    {/* <div className="w-40 h-40 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"></div> */}
                </div>
            </div>
        </>
    )
}

export default Login