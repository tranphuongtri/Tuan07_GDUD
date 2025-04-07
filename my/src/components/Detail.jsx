import StatusBadge from "./StatusBadge";

const orders = [
    { name: "Elizabeth Lee", company: "AvataSystems", value: 539, date: "10/21/2023", status: "New" },
    { name: "Carlos Garcia", company: "Smootashift", value: 747, date: "24/07/2023", status: "New" },
    { name: "Elizabeth Bailey", company: "Prime Time Telecom", value: 554, date: "08/09/2023", status: "In progress" },
    { name: "Ryan Brown", company: "OmniTech Corporation", value: 594, date: "31/08/2023", status: "In progress" },
    { name: "Ryan Young", company: "Datastream Inc", value: 765, date: "04/06/2023", status: "Completed" },
    { name: "Hailey Adams", company: "FlowRun", value: 922, date: "10/06/2023", status: "Completed" },
];

const DetailedReport = () => {
    return (
        <div className="bg-white p-4 shadow rounded-lg mt-5">
            <div className="flex justify-between items-center"> <h3 className="text-gray-600 text-lg font-bold mb-3 ">Detailed Report</h3>
                <div className="flex items-center"><button className="bg-pink-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mx-3">Import</button>
                    <button className="bg-pink-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mx-3">Export</button></div></div>
            <table className="w-full text-left">
                <thead>
                    <tr className="text-gray-500">
                        <th className="p-2"><input type="checkbox" name="" id="" /></th>
                        <th className="p-2">Customer Name</th>
                        <th className="p-2">Company</th>
                        <th className="p-2">Order Value</th>
                        <th className="p-2">Order Date</th>
                        <th className="p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index} className="border-t text-gray-700">
                            <th className="p-2"><input type="checkbox" name="" id="" /></th>
                            <td className="p-2">{order.name}</td>
                            <td className="p-2">{order.company}</td>
                            <td className="p-2">${order.value}</td>
                            <td className="p-2">{order.date}</td>
                            <td className="p-2">
                                <StatusBadge status={order.status} />
                            </td>
                            <td className="p-2"><button className="">v</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default DetailedReport;