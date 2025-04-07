import { useEffect, useState } from 'react';

function Overview() {
    const [data, setData] = useState([]);
    const [stats, setStats] = useState({
        turnover: 92405,
        profit: 32218,
        newCustomers: 298,
        turnoverChange: 5.39,
        profitChange: 5.39,
        customerChange: 6.84
    });

    useEffect(() => {
        fetch('https://67ee8ffcc11d5ff4bf7a11b6.mockapi.io/reports')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="mb-6">
            <h2 className="flex items-center mb-4 text-xl font-bold">
                <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#F472B6" />
                    <path d="M8 10H6V16H8V10Z" fill="white" />
                    <path d="M13 6H11V16H13V6Z" fill="white" />
                    <path d="M18 12H16V16H18V12Z" fill="white" />
                </svg>
                Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Turnover Card */}
                <div className="bg-pink-50 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Turnover</span>
                        <button className="p-2 rounded-lg bg-white text-pink-500">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9H21M3 15H21M12 3V21" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">${stats.turnover.toLocaleString()}</h3>
                    <div className="flex items-center text-green-500 text-sm">
                        <span className="mr-1">▲</span>
                        <span>{stats.turnoverChange}% period of change</span>
                    </div>
                </div>

                {/* Profit Card */}
                <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Profit</span>
                        <button className="p-2 rounded-lg bg-white text-blue-500">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" />
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">${stats.profit.toLocaleString()}</h3>
                    <div className="flex items-center text-green-500 text-sm">
                        <span className="mr-1">▲</span>
                        <span>{stats.profitChange}% period of change</span>
                    </div>
                </div>

                {/* New Customers Card */}
                <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">New customer</span>
                        <button className="p-2 rounded-lg bg-white text-blue-500">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{stats.newCustomers}</h3>
                    <div className="flex items-center text-green-500 text-sm">
                        <span className="mr-1">▲</span>
                        <span>{stats.customerChange}% period of change</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;