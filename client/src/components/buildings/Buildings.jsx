import { Link } from "react-router";
import BuildingCard from "../buildingCard/BuildingCard.jsx";
import { useState } from "react";
import { useEffect } from "react";

const BUILDINGS_URL = 'http://localhost:3030/jsonstore/buildings';

export default function Buildings() {
    const [buildings, setBuildings] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(BUILDINGS_URL);

                const result = await response.json();

                setBuildings(Object.values(result));
                
                console.log(buildings);

            } catch (error) {
              
                alert(error.message);
            }

        })()
    }, [])
    return (
        <>

            <main className="bg-slate-100 min-h-screen px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    

                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">
                            Buildings
                        </h1>

                        <Link
                            to="/buildings/create"
                            className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 hover:scale-105 transition"
                        >
                            + Add Building
                        </Link>
                    </div>


                    <div className="max-h-[70vh] overflow-y-auto pr-2">

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            
                            {buildings.map(building => <BuildingCard key={building._id} {...building} />)}

                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}