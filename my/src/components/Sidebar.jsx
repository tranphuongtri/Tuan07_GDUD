const Sidebar = () => {
    return (
      <aside className="w-64 bg-gray-100 h-screen p-5">
        <h1 className="text-lg font-bold text-gray-700">Logo</h1>
        <nav className="mt-5">
          <ul>
            <li className="bg-red-500 text-white px-4 py-2 rounded">Dashboard</li>
            <li className="mt-2 px-4 py-2 hover:bg-gray-200">Projects</li>
            <li className="mt-2 px-4 py-2 hover:bg-gray-200">Teams</li>
            <li className="mt-2 px-4 py-2 hover:bg-gray-200">Analytics</li>
            <li className="mt-2 px-4 py-2 hover:bg-gray-200">Messages</li>
            <li className="mt-2 px-4 py-2 hover:bg-gray-200">Integrations</li>
          </ul>
        </nav>
      </aside>
    );
  };
  export default Sidebar;