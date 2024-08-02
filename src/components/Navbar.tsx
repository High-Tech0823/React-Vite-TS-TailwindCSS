import { FlagIcon, MarketsIcon, SearchIcon } from "./icons";

const Navbar = () => {
    return(
        <div>
            <div className="flex gap-5 px-3 py-1 items-center border border-black rounded-lg">
                <SearchIcon color="black"/>
                <input type="text" className="outline-none" placeholder="Search markets"/>
            </div>
            <div>
                <MarketsIcon color="black" />
                <FlagIcon color="black" />
            </div>
        </div>
    )
}

export default Navbar;