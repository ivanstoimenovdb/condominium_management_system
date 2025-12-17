import { Link } from "react-router";
import MessageItem from "../messageItem/MessageItem.jsx";

export default function Feeds() {
    return (
        <div className="mt-14 w-full max-w-5xl">
            <div className="bg-white rounded-3xl p-6 flex flex-col h-[70vh] shadow-md">

                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base font-semibold text-slate-700">
                        Latest Messages from Residents
                    </h4>

                    <Link
                        to="/messages"
                        className="text-sm text-indigo-600 hover:underline"
                    >
                        View all
                    </Link>
                </div>

  
                <div className="flex-1 overflow-y-auto pr-2">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        <MessageItem
                            building="ul. Ivan Vazov 12"
                            author="Ivan Petrov"
                            text="The entrance light on floor 2 is not working."
                        />

                        <MessageItem
                            building="bul. Bulgaria 45"
                            author="Maria Ivanova"
                            text="Can we schedule cleaning this weekend?"
                        />

                        <MessageItem
                            building="ul. Ivan Vazov 12"
                            author="Georgi Kolev"
                            text="Water pressure is low in the morning."
                        />


                        <MessageItem
                            building="bul. Bulgaria 45"
                            author="Stoyan Dimitrov"
                            text="Elevator makes noise when stopping."
                        />

                        <MessageItem
                            building="ul. Ivan Vazov 12"
                            author="Elena Petrova"
                            text="Heating is not working properly."
                        />

                        <MessageItem
                            building="ul. Ivan Vazov 12"
                            author="Elena Petrova"
                            text="Heating is not working properly."
                        />

                        <MessageItem
                            building="ul. Ivan Vazov 12"
                            author="Elena Petrova"
                            text="Heating is not working properly."
                        />

                        <MessageItem
                            building="ul. Ivan Vazov 12"
                            author="Elena Petrova"
                            text="Heating is not working properly."
                        />

                        <MessageItem
                            building="ul. Ivan Vazov 12"
                            author="Elena Petrova"
                            text="Heating is not working properly."
                        />

                        <MessageItem
                            building="ul. Ivan Vazov 12"
                            author="Elena Petrova"
                            text="Heating is not working properly."
                        />


                        <MessageItem
                            building="ul. Ivan Vazov 12"
                            author="Elena Petrova"
                            text="Heating is not working properly."
                        />

                        <MessageItem
                            building="ul. Ivan Vazov 12"
                            author="Elena Petrova"
                            text="Heating is not working properly."
                        />

                        <MessageItem
                            building="ul. Ivan Vazov 12"
                            author="Elena Petrova"
                            text="Heating is not working properly."
                        />
                    </div>

                </div>

            </div>
        </div>
    );
}