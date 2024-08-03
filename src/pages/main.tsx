import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="flex gap-5 justify-center">
                <EventCard text="Science Beta" btn_text="View" onClick={() => { }} className="bg-red-300" img_url="" />
                <EventCard text="Science Beta" btn_text="View" onClick={() => { }} className="bg-red-300" img_url="" />
                <EventCard text="Science Beta" btn_text="View" onClick={() => { }} className="bg-red-300" img_url="" />
                <EventCard text="Science Beta" btn_text="View" onClick={() => { }} className="bg-red-300" img_url="" />
            </div>
        </div>
    )
}

export default Main;