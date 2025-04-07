import { useEffect, useState } from 'react';

function DataTable() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItems, setSelectedItems] = useState([]);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch('https://67ee8ffcc11d5ff4bf7a11b6.mockapi.io/reports')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Tính toán các item hiển thị cho trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Xử lý chuyển trang
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Xử lý checkbox
    const handleCheckboxChange = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    return (
        <div className="bg-white p-6 rounded shadow">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Detailed report</h2>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-pink-300 rounded text-pink-500 flex items-center">
                        <span className="mr-1">Import</span>
                    </button>
                    <button className="px-4 py-2 border border-pink-300 rounded text-pink-500 flex items-center">
                        <span className="mr-1">Export</span>
                    </button>
                </div>
            </div>

            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="w-10 px-4 py-3">
                            <input type="checkbox" />
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order Value</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {currentItems.map(item => (
                        <tr key={item.id}>
                            <td className="px-4 py-4">
                                <input
                                    type="checkbox"
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => handleCheckboxChange(item.id)}
                                />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-2">
                                <img src={item.avatar} alt="" className="w-8 h-8 rounded-full" />
                                <span>{item.customerName}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.company}</td>
                            <td className="px-6 py-4 whitespace-nowrap">${item.orderValue}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{new Date(item.orderDate).toLocaleDateString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 py-1 rounded-full text-xs ${item.status === 'New' ? 'bg-blue-100 text-blue-600' :
                                        item.status === 'In-progress' ? 'bg-yellow-100 text-yellow-600' :
                                            'bg-green-100 text-green-600'
                                    }`}>
                                    {item.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <button className="text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Phân trang */}
            <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                    {data.length} results
                </div>
                <div className="flex">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 mx-1 border rounded disabled:opacity-50"
                    >
                        &lt;
                    </button>

                    {[...Array(Math.min(5, totalPages))].map((_, i) => {
                        // Hiển thị 5 nút phân trang gần với trang hiện tại
                        let pageNum;
                        if (totalPages <= 5) {
                            pageNum = i + 1;
                        } else if (currentPage <= 3) {
                            pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                        } else {
                            pageNum = currentPage - 2 + i;
                        }

                        return (
                            <button
                                key={i}
                                onClick={() => handlePageChange(pageNum)}
                                className={`px-3 py-1 mx-1 border rounded ${currentPage === pageNum ? 'bg-pink-500 text-white' : ''}`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}

                    {totalPages > 5 && currentPage < totalPages - 2 && (
                        <>
                            <span className="px-2 py-1">...</span>
                            <button
                                onClick={() => handlePageChange(totalPages)}
                                className={`px-3 py-1 mx-1 border rounded`}
                            >
                                {totalPages}
                            </button>
                        </>
                    )}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 mx-1 border rounded disabled:opacity-50"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DataTable;