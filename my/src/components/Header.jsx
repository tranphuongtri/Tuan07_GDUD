const Header = () => {
    return (
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <input type="text" className="text-gray-500"/>
          <span className="text-gray-500">🔔</span>
          <span className="text-gray-500">❓</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </header>
    );
  };
  export default Header;