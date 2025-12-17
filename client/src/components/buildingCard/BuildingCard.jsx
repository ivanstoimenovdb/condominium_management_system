import { Link } from "react-router";

export default function BuildingCard({
    _id,
    address,
    manager,
    apartmentsAcc
}
) {
    return (
        <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="p-6 space-y-3">

                <h2 className="text-xl font-semibold flex items-center gap-2">
                    🏢 <span>{address}</span>
                </h2>

                <div className="text-slate-600 text-sm space-y-1">
                    <p>
                        Apartments:
                        <span className="ml-2 font-medium text-slate-800">{apartmentsAcc}</span>
                    </p>

                    <p>
                        Manager:
                        <span className="ml-2 font-medium text-slate-800">
                            {manager}
                        </span>
                    </p>
                </div>
            </div>

            <div className="px-6 pb-6">
                <Link
                    to={`/buildings/${_id}/details`}
                    className="block text-center py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium opacity-90 group-hover:opacity-100 transition"
                >
                    View Building →
                </Link>
            </div>
        </div>
    );
}