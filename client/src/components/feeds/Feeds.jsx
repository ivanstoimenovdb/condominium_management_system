import { useState } from "react";
import MessageItem from "../messageItem/MessageItem.jsx";
import { useEffect } from "react";
import request from "../utils/request.js";

const MESSAGES_URL = 'http://localhost:3030/jsonstore/feeds';

export default function Feeds() {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        (async () => {

            const result = await request(MESSAGES_URL, 'GET');

            setMessages(Object.values(result));

        })()
    }, [])

    return (
        <div className="mt-14 w-full max-w-5xl">
            <div className="bg-white rounded-3xl p-6 flex flex-col h-[70vh] shadow-md">

                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base font-semibold text-slate-700">
                        Latest Messages from Residents
                    </h4>
                </div>


                <div className="flex-1 overflow-y-auto pr-2">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        {messages.map(message => <MessageItem key={message._id} {...message} />)}

                    </div>

                </div>

            </div>
        </div>
    );
}