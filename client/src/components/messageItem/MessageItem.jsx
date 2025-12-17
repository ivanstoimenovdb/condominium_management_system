import { useEffect } from "react";
import { useState } from "react";
import request from "../utils/request.js";

const USER_URL = 'http://localhost:3030/jsonstore/users';
const BUILDING_URL = 'http://localhost:3030/jsonstore/buildings';

export default function MessageItem({
    _id,
    userId,
    buildingId,
    message }) {
    const [user, setUser] = useState({});
    const [building, setBuilding] = useState({});

    useEffect(() => {
        (async () => {
            const userResult = await request(`${USER_URL}/${userId}`, 'GET');
            const buildingResult = await request(`${BUILDING_URL}/${buildingId}`, 'GET');
            setUser(userResult);
            setBuilding(buildingResult);

        })()
    }, [userId, buildingId])

    return (
        <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1">


            <div className="p-6 space-y-3">

                <p className="text-xs text-slate-500 flex items-center gap-1">
                    🏢 <span>{building.address}</span>
                </p>

                <p className="text-sm font-semibold text-slate-800">
                    {`${user.firstName} ${user.lastName}`}
                </p>

                <p className="text-slate-600 text-sm leading-snug">
                    {message}
                </p>

            </div>


            <div className="px-6 pb-6">
                <button
                    className="w-full py-2 rounded-xl bg-slate-100 text-slate-700 text-sm font-medium
                     hover:bg-indigo-50 hover:text-indigo-600 transition"
                >
                    Open message →
                </button>
            </div>

        </div>
    );
}