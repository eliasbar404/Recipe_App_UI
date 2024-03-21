import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full p-4 flex justify-between items-center shadow-xl fixed bg-slate-200">
            <Logo width={70}/>
            <ul className="flex gap-8 items-center">
                <Link to={'/login'} className="font-bold hover:bg-gray-300 rounded-xl px-5 py-1 cursor-pointer">LOG IN</Link>
                <Link to={'/register'} className="bg-black rounded-xl font-bold text-slate-50 px-5 py-1 cursor-pointer hover:shadow-md">SIGN UP</Link>
            </ul>
        </nav>
    )
}

export default Navbar