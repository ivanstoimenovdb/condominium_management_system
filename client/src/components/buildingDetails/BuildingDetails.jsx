import { Link } from "react-router";

export default function BuildingDetails() {
    return (
        <>
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                    {/* REAL IMAGE */}
                    <img
                        src={building.imageUrl}
                        alt="Building"
                        className="w-full h-72 object-cover"
                    />

                    <div className="p-8 grid md:grid-cols-2 gap-8">

                        {/* Left */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-800">
                                📍 {building.address}
                            </h2>

                            <p className="text-slate-600">
                                <span className="font-medium">Building Manager:</span>{" "}
                                {building.manager}
                            </p>

                            <p className="text-slate-600">
                                <span className="font-medium">Entrance Fee:</span>{" "}
                                {building.entranceFee} BGN
                            </p>
                        </div>

                        {/* Right */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 rounded-2xl p-6 text-center">
                                <p className="text-slate-600">Apartments</p>
                                <p className="text-3xl font-bold text-indigo-600">
                                    {building.apartmentsCount}
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 text-center">
                                <p className="text-slate-600">Residents</p>
                                <p className="text-3xl font-bold text-emerald-600">
                                    {building.residentsCount}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="border-t px-8 py-6 flex justify-end gap-4">
                        <Link
                            to="/buildings/1/edit"
                            className="px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
                        >
                            Edit
                        </Link>

                        <button className="px-6 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition">
                            Delete
                        </button>
                    </div>

                </div>
            </section>
        </>
    );
}