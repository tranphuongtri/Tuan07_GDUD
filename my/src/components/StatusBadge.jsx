const StatusBadge = ({ status }) => {
  const statusColors = {
    New: "bg-blue-200 text-blue-700",
    "In progress": "bg-yellow-200 text-yellow-700",
    Completed: "bg-green-200 text-green-700",
  };

  return (
    <span className={`px-3 py-1 text-xs font-bold rounded ${statusColors[status]}`}>
      {status}
    </span>
  );
};
export default StatusBadge;