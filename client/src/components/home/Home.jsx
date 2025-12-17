import { Link } from "react-router";
import BuildingCard from "../buildingCard/BuildingCard.jsx";
import { useState } from "react";
import { useEffect } from "react";
import request from "../utils/request.js";

const BUILDINGS_URL = 'http://localhost:3030/jsonstore/buildings';

export default function Home() {
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await request(BUILDINGS_URL, 'GET');

            const resBuildings = Object.values(result);

            let output = resBuildings.sort((a, b) => b._createdOn - a._createdOn).slice(0, 2);

            setBuildings(output);
        })()
    }, [])

    return (
        <>

            <section className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 flex items-center">
                <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

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

                            <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
                                {buildings.map(building => <BuildingCard key={building._id} {...building} />)}
                            </div>
                        </div>
                    </div>

                </div>
            </section>



        </>
    );
}