import { Link, NavLink } from "react-router";

export default function Header() {

    // const buttonLogic = (active) => {   `${active && "text-gray-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"}`}
    //                                     active ? "bg-blue-600 text-white px-4 py-2 rounded"
    //                                             : "text-gray-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"; }
    return (
        <>
            <header className="bg-white shadow-md">
                <nav className="container mx-auto flex justify-between items-center px-6 py-4">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                        Condominium<span className="text-gray-700">MS</span>
                    </Link>

                    {/* Navigation */}
                    <ul className="flex space-x-6 items-center">
                        <li>
                            <NavLink
                                to="/"
                                className={({isActive}) => isActive ? "bg-blue-600 text-white px-4 py-2 rounded"
                                                                    : "text-gray-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/buildings"
                                className={({isActive}) => isActive ? "bg-blue-600 text-white px-4 py-2 rounded"
                                                                    : "text-gray-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"}
                            >
                                Buildings
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({isActive}) => isActive ? "bg-blue-600 text-white px-4 py-2 rounded"
                                                                    : "text-gray-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"}
                               
                            >
                                Feeds
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/login"
                                className={({isActive}) => isActive ? "bg-blue-600 text-white px-4 py-2 rounded"
                                                                    : "text-gray-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"}
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}