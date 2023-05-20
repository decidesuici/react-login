import { Link } from "react-router-dom"

function Navbar(){
    const navbarLinks = ['Home', 'Blog', 'About Me'];

    return(
        <>
            <header className="bg-black flex justify-between items-center py-5">
                <div className="w-1/3 text-left ml-8">
                    <h1 className="text-white font-mono">@Eduardo_RN & @DeicideSuici</h1>
                </div>
                <nav className="w-1/3 text-center">
                    <ul className="">
                        { navbarLinks.map((link, index) => (
                            <li key={ index } className="text-white inline-block px-4 border-solid border-b-2 border-b-black transition-all hover:border-b-white">
                                <Link to="/">{ link }</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="w-1/3 text-right mr-8">
                    <Link to="/login" className="bg-white py-2 px-5 mr-4">Log In</Link>
                    <Link to="/login" className="bg-white py-2 px-5">Sign Up</Link>
                </div>
            </header>
        </>
    )
}

export default Navbar