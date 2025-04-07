import icons from "../../public/img/icon-pack";
import Groups from "../../public/img/Groups.png";
function Sidebar() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-6"><img src="" alt="" /></h1>
            <nav>
                <ul className="space-y-4">
                    <li className="flex items-center gap-2 px-4 py-2 text-pink-600 font-medium"><img src={icons.dashBoardIcon} alt="" className="h-4 w-4" />Dashboard</li>
                    <li className="flex items-center gap-2 px-4 py-2 "><img src={icons.projectsIcon} alt="" className="h-4 w-4" />Projects</li>
                    <li className="flex items-center gap-2 px-4 py-2 "><img src={icons.teamsIcon} alt="" className="h-4 w-4" />Teams</li>
                    <li className="flex items-center gap-2 px-4 py-2 "><img src={icons.analysticsIcon} alt="" className="h-4 w-4" />Analytics</li>
                    <li className="flex items-center gap-2 px-4 py-2 "><img src={icons.messagesIcon} alt="" className="h-4 w-4" />Messages</li>
                    <li className="flex items-center gap-2 px-4 py-2 "><img src={icons.integrationsIcon} alt="" className="h-4 w-4" />Integrations</li>
                </ul>
            </nav>
            <div className="mt-10 bg-gray-100 p-4 rounded">
                <p className="text-sm">V2.0 is available</p>
                <button className="mt-2 px-4 py-2 bg-white text-sm border rounded">Try now</button>
            </div>
        </div>
    );
}

export default Sidebar;