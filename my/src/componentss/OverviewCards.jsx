// import { useEffect, useState } from "react";
// import { getOverview } from "../services/overviewService";

// function OverviewCards() {
//     const [data, setData] = useState({ turnover: 0, profit: 0, newCustomer: 0 });

//     useEffect(() => {
//         getOverview().then(setData);
//     }, []);

//     const cards = [
//         { title: "Turnover", value: `$${data.turnover}`, color: "bg-pink-50" },
//         { title: "Profit", value: `$${data.profit}`, color: "bg-blue-50" },
//         { title: "New Customer", value: data.newCustomer, color: "bg-green-50" },
//     ];

//     return (
//         <div className="grid grid-cols-3 gap-4 mb-8">
//             {cards.map((card) => (
//                 <div key={card.title} className={`p-4 rounded ${card.color}`}>
//                     <h3 className="text-gray-500">{card.title}</h3>
//                     <p className="text-2xl font-bold">{card.value}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default OverviewCards;