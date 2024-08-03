import React from "react";
import { EventCardProps } from "../types";

const EventCard: React.FC<EventCardProps> = ({ text, btn_text, img_url, onClick, className }) => {
    return (
        <div className={`${className} flex w-[20vw] h-[16vh] rounded-xl`}>
            <div className="flex flex-col text-white">
                <p className="text-xl font-bold">{text}</p>
                <button onClick={onClick} className="bg-gray-500 hover:bg-gray-400 rounded-full">{btn_text}</button>
            </div>
            <img src={img_url} alt="" />
        </div>
    )
}

export default EventCard;