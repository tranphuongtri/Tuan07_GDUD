import Overview from '../componentss/Overview';
import DataTable from '../componentss/DataTable';

function Dashboard() {
    return (

        <div >
            <Overview />
            <div className="mt-8"><DataTable /></div>
        </div>
    );
}

export default Dashboard;

// function Dashboard() {
//     return (
//         <div>
//             <h2 className="flex items-center gap-2 px-4 py-2 text-2xl font-bold mb-6 text-pink-600"><img src={icons.dashBoardIcon} alt="" className="h-4 w-4" />Overview</h2>
//             <div className="grid grid-cols-3 gap-6">
//                 <div className="p-4 bg-white shadow rounded">
//                     <h3 className="text-sm font-semibold text-gray-500">Turnover</h3>
//                     <p className="text-2xl font-bold mt-2">$92,405</p>
//                     <p className="text-green-500 text-sm mt-1">+5.39% period of change</p>
//                 </div>
//                 <div className="p-4 bg-white shadow rounded">
//                     <h3 className="text-sm font-semibold text-gray-500">Profit</h3>
//                     <p className="text-2xl font-bold mt-2">$32,218</p>
//                     <p className="text-green-500 text-sm mt-1">+5.39% period of change</p>
//                 </div>
//                 <div className="p-4 bg-white shadow rounded">
//                     <h3 className="text-sm font-semibold text-gray-500">New customer</h3>
//                     <p className="text-2xl font-bold mt-2">298</p>
//                     <p className="text-green-500 text-sm mt-1">+6.84% period of change</p>
//                 </div>
//             </div>
//         </div>
//     );
// }
