export default function MessageItem({ building, author, text }) {
    return (
        <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1">


            <div className="p-6 space-y-3">

                <p className="text-xs text-slate-500 flex items-center gap-1">
                    🏢 <span>{building}</span>
                </p>

                <p className="text-sm font-semibold text-slate-800">
                    {author}
                </p>

                <p className="text-slate-600 text-sm leading-snug">
                    {text}
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