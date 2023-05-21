import { Link } from "react-router-dom"

function Navbar(){
    const navbarLinks = ['Home', 'Blog', 'About Me'];

    return(
        <>
            <header className="bg-violet-500 flex justify-between items-center py-5 px-8 fixed w-full left-0 top-0 shadow-md">
                <div className="w-1/3 text-left">
                    <h1 className="text-white font-mono">@Eduardo_RN & @DeicideSuici</h1>
                </div>
                <nav className="w-1/3 text-center">
                    <ul className="">
                        { navbarLinks.map((link, index) => (
                            <li key={ index } className="text-white inline-block px-4 border-solid border-b-2 border-b-violet-500 transition-all hover:border-b-white">
                                <Link to="/">{ link }</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="w-1/3 text-right">
                    <Link to="/auth/login" className="bg-white py-2 text-violet-500 px-5 mr-4 hover:bg-violet-500 border-2 border-solid border-white transition-all hover:text-white rounded-md">Log In</Link>
                    <Link to="/auth/signup" className="bg-white py-2 text-violet-500 px-5 hover:bg-violet-500 border-2 border-solid border-white transition-all hover:text-white rounded-md">Sign Up</Link>
                </div>
            </header>
        </>
    )
}

export default Navbar