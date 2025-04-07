const OverviewCard = ({ title, value, change }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg w-64">
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-2xl font-bold">${value}</p>
      <p className={`text-sm ${change > 0 ? "text-green-500" : "text-red-500"}`}>
        {change > 0 ? `+${change}%` : `${change}%`} period of change
      </p>
    </div>
  );
};
export default OverviewCard;