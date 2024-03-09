import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <header className="bg-slate-50 py-1 shadow-xl fixed w-[100%] z-50">
        <nav className="w-[90%] m-auto flex justify-between items-center">
            <Logo width={70}/>
            <ul className="flex gap-8 items-center">
                <Link to={'/login'} className="font-bold hover:bg-gray-300 rounded-xl px-5 py-1 cursor-pointer">LOG IN</Link>
                <Link to={'/register'} className="bg-black rounded-xl font-bold text-slate-50 px-5 py-1 cursor-pointer hover:shadow-md">SIGN UP</Link>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar