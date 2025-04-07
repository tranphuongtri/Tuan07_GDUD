import icons from "../../public/img/icon-pack";
function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow">
            <h2 className="text-2xl font-bold text-pink-600">Dashboard</h2>
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded px-4 py-2"
                /><img className="h-4 w-4" src={icons.searchIcon} />
                <span className="text-gray-600"><img src={icons.helpIcon} alt="" className="h-4 w-4" /></span>
                <span className="text-gray-600"><img className="h-4 w-4" src={icons.notificationIcon} /></span>
                {/* 🔔 */}
                <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
            </div>
        </header>
    );
}

export default Header;