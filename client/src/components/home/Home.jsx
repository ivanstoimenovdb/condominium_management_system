import { Link } from "react-router";
import BuildingCard from "../buildingCard/BuildingCard.jsx";

export default function Home() {
    return (
        <>

            <section className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 flex items-center">
                <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

                    {/* TEXT – TOP */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Manage Your <br />
                        <span className="text-indigo-600">Buildings Smarter</span>
                    </h1>

                    <p className="mt-4 max-w-2xl text-slate-600 text-base md:text-lg">
                        All your buildings and operations in one clean, modern dashboard.
                    </p>

                    <div className="mt-6 flex gap-4">
                        <Link
                            to="/login"
                            className="px-6 py-3 rounded-xl  bg-white text-indigo-600 font-semibold border hover:bg-indigo-600 hover:text-white shadow-lg transition"
                        >
                            Get Started
                        </Link>

                        <Link
                            to="/register"
                            className="px-6 py-3 rounded-xl  bg-white text-indigo-600 font-semibold border hover:bg-indigo-600 hover:text-white shadow-lg transition"
                        >
                            Register
                        </Link>
                    </div>

                    {/* DASHBOARD PREVIEW – CENTER */}
                    <div className="mt-14 w-full max-w-5xl">
                        <div className="bg-white rounded-3xl shadow-2xl p-6">

                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-base font-semibold text-slate-700">
                                    Buildings Overview
                                </h4>

                                <Link
                                    to="/buildings"
                                    className="text-sm text-indigo-600 hover:underline"
                                >
                                    View all
                                </Link>
                            </div>

                            {/* Horizontal Scroll */}
                            <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
                                <BuildingCard />
                                <BuildingCard />
                                <BuildingCard />
                                <BuildingCard />
              
                            </div>
                        </div>
                    </div>

                </div>
            </section>



        </>
    );
}